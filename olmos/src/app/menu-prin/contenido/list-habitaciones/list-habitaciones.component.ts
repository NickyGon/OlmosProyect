import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RouteService } from 'src/app/services/route.service';
import { HabitComponent } from '../../dialogs/habit/habit.component';
import { HabitEditComponent } from '../../dialogs/habit-edit/habit-edit.component';
import { HabitDeleteComponent } from '../../dialogs/habit-delete/habit-delete.component';

@Component({
  selector: 'app-list-habitaciones',
  templateUrl: './list-habitaciones.component.html',
  
  styleUrls: ['./list-habitaciones.component.css']
})
export class ListHabitacionesComponent implements OnInit {


  headRoute:string="";
  constructor(private r:RouteService, public router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
  let dialogRef=this.dialog.open(HabitComponent,{
    height:'max-content',
    panelClass: 'custom-dialog-container'
    
  }) 
  }

  openDialogEdit(){
    let dialogRef=this.dialog.open(HabitEditComponent,{
      height:'max-content',
      panelClass: 'confirm-dialog-container'
      
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
