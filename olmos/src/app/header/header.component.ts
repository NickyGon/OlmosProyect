import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showing=true;
  mode:any;
  headRoute:string="";

  constructor(public route: ActivatedRoute, private r:RouteService, private router:Router) { }

  ngOnInit(): void {
    this.headRoute=this.r.getRoute()
    this.showing=true;
  }

  setRoute(newRoute:string){
    this.r.setRoute(newRoute);
    this.headRoute=this.r.getRoute();
  }

  toggleButton(){
    this.showing=true;
  }

  onLogout() {
    this.router.navigate(['/'])
  }


}
