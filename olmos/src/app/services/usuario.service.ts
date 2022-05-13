import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from '../models/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private user:AuthData={nombre:"", apellido:"", ci:"", email: "", password: "", access:""};
  private users:AuthData[]=[];
  private fetchUsers = new Subject<AuthData[]>();


  url="http://localhost:3000/api/usuarios"


  constructor(private http:HttpClient, private router:Router) { }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUsuarios(){
    this.http.get<{message:string, users:AuthData[]}>(this.url).subscribe(transformedData=>{
      console.log(transformedData.users)
      this.users=transformedData.users;
      this.fetchUsers.next([...this.users])
    })
  }

  getUsersListener() {
    return this.fetchUsers.asObservable();
  }
  createUser(name: string,apellido:string, ci:string, email: string, password: string, access:string) {
    const authData: AuthData = { nombre:name, apellido:apellido, ci:ci, email: email, password: password, access:access };
    this.http
      .post(this.url, authData)
      .subscribe(response => {
        console.log(response);
        this.getUsuarios()

      });

  }
}

