import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';

@Component({
  selector: 'app-habit-delete',
  templateUrl: './habit-delete.component.html',
  styleUrls: ['./habit-delete.component.css']
})
export class HabitDeleteComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<HabitDeleteComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

}
