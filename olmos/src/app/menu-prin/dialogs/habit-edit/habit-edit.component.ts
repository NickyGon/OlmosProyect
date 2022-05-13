import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Categoria {
  val: string;
}

@Component({
  selector: 'app-habit-edit',
  templateUrl: './habit-edit.component.html',
  styleUrls: ['./habit-edit.component.css']
})
export class HabitEditComponent implements OnInit {

  categoria:Categoria[] = [
    {val: 'Can'},
    {val: 'Felino'},
    {val: 'Equino'},
    {val: 'Otro'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editHabitacion(form:NgForm){

  }
}
