import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/components/dialog-body/dialog-body.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private matDialog:MatDialog){}
openDialog(){
  this.matDialog.open(DialogBodyComponent,{
    width: '1000px',
    height: '800px'
  })
}
}

