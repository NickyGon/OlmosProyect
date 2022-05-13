import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nombreapellido: string;
  invitado: number;
  edad: number;
  ci: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invitado: 1, nombreapellido: 'Hydrogen', edad: 1.0079, ci: 'H'},
  {invitado: 2, nombreapellido: 'Helium', edad: 4.0026, ci: 'He'},
  {invitado: 3, nombreapellido: 'Lithium', edad: 6.941, ci: 'Li'},
  {invitado: 4, nombreapellido: 'Beryllium', edad: 9.0122, ci: 'Be'},
  {invitado: 5, nombreapellido: 'Boron', edad: 10.811, ci: 'B'},
  {invitado: 6, nombreapellido: 'Carbon',edad: 12.0107, ci: 'C'},
  {invitado: 7, nombreapellido: 'Nitrogen', edad: 14.0067, ci: 'N'},
  {invitado: 8, nombreapellido: 'Oxygen', edad: 15.9994, ci: 'O'},
  {invitado: 9, nombreapellido: 'Fluorine', edad: 18.9984, ci: 'F'},
  {invitado: 10, nombreapellido: 'Neon', edad: 20.1797, ci: 'Ne'},
];


@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.css']
})


export class ReservaEditComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  date = new FormControl(new Date());
  displayedColumns: string[] = ['nombreapellido', 'edad', 'ci','acciones'];
  dataSource! : MatTableDataSource<any>;
  
  constructor() { }

  ngOnInit(): void {
   this.cargarInvitados(); 
  }

  cargarInvitados(){
    this.dataSource=new MatTableDataSource(ELEMENT_DATA);
  }

  añadirInvitado(indexRes:number){
    this.cargarInvitados()
  }

  borrarInvitado(index: number){
    console.log(index)
    this.cargarInvitados()
  }

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
  }



  editHabitacion(form:NgForm){
    
  }

 
  
}
