import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { EmailValidator } from "@angular/forms";
import { AuthData } from "../models/auth-data.model";

@Injectable({ providedIn: "root" })
export class AuthService {
  url="http://localhost:3000/api/usuarios"

  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private user:AuthData={nombre:"", apellido:"", ci:"", email: "", password: "", access:""}
  private authStatusListener = new Subject<boolean>();
  
  constructor(private http: HttpClient, private router: Router) {}


  login(email: string, password: string) {
    const authData = { email: email, password: password };
    this.http
      .post<{ usuarioSuccess:AuthData, token: string; expiresIn: number }>(
        this.url+'/login',
        authData
      )
      .subscribe(response => {
        const token = response.token;
        const user = response.usuarioSuccess;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.user=user;
          this.saveAuthData(user, token, expirationDate);
          this.router.navigate(['/menu-prin']);
        }
      });
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  private saveAuthData(user:AuthData, token: string, expirationDate: Date) {
    localStorage.setItem("userName", user.nombre);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userAccess", user.access);
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userAccess");
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    let name="";
    let email="";
    let access="";

    if (!authInformation) {
      return;

    }
    if(authInformation){
      name=authInformation.name;
      email=authInformation.email;
      access=authInformation.access;
    }

    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
      //this.user={name:name,password:"",email:email,access:access}
    }
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const access = localStorage.getItem("userAccess");

    if (!token || !expirationDate || !name || !email || !access) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      name,
      email,
      access
    }
  }

}