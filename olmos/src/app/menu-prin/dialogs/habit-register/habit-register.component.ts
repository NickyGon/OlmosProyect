import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Categoria {
  val: string;
}
@Component({
  selector: 'app-habit-register',
  templateUrl: './habit-register.component.html',
  styleUrls: ['./habit-register.component.css']
})
export class HabitRegisterComponent implements OnInit {

  categoria:Categoria[] = [
    {val: 'Can'},
    {val: 'Felino'},
    {val: 'Equino'},
    {val: 'Otro'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  createHabitacion(form:NgForm){

  }

}
