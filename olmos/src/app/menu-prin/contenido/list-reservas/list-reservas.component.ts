import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';
import { HabitDeleteComponent } from '../../dialogs/habit-delete/habit-delete.component';
import { HabitComponent } from '../../dialogs/habit/habit.component';
import { ReservComponent } from '../../dialogs/reserv/reserv.component';
import { ReservaEditComponent } from '../../dialogs/reserva-edit/reserva-edit.component';

@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.component.html',
  styleUrls: ['./list-reservas.component.css']
})
export class ListReservasComponent implements OnInit {

  constructor(private r:RouteService, public router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogHab(){
    let dialogRef=this.dialog.open(HabitComponent,{
      height:'max-content',
      panelClass: 'custom-dialog-container'
      
    }) 
   }

   openDialogRes(){
    let dialogRef=this.dialog.open(ReservComponent,{
      height:'max-content',
      panelClass: 'custom-dialog-container'
      
    }) 
   }

   openDialogEdit(){
    let dialogRef=this.dialog.open(ReservaEditComponent,{
      height:'max-content',
      panelClass: 'custom-dialog-container'
      
    }) 
 }

  openDialogDelete(){
    let dialogRef=this.dialog.open(HabitDeleteComponent,{
      height:'max-content',
      panelClass: 'confirm-dialog-container',
      data:{
        message:"pi"
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }

}
