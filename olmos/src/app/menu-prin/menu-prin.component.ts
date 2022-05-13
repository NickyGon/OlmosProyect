import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-menu-prin',
  templateUrl: './menu-prin.component.html',
  styleUrls: ['./menu-prin.component.css']
})
export class MenuPrinComponent implements OnInit {
  

  headRoute:string="";
  showing=false;


  constructor(public route: ActivatedRoute, private r:RouteService) { }

  ngOnInit(): void {
    this.headRoute=this.r.getRoute()
    console.log(this.headRoute)
    this.showing=true;
  }

  

  

}
