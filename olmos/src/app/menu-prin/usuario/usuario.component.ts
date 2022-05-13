import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthData } from 'src/app/models/auth-data.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  fetchedUser:AuthData={nombre:"",apellido:"",ci:"",email:"",password:"",access:""}

  user = { name: 'Admin 1', picture: "/assets/userlogo.png" }
  private mode:any;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  //   this.fetchedUser=this.authService.getUser()
  //   this.route.paramMap.subscribe((paramMap: ParamMap) => {
  //     if (typeof paramMap.get("mode") ==='string') {
  //       this.mode = paramMap.get("mode");
  //     }
  // });
  // this.user.name=this.fetchedUser.name;
  // if (this.user.name==="") {
  //   this.router.navigate(['/']);
  // }

  }
}
