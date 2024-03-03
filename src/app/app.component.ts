import { Component } from '@angular/core'
import { dataType } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'Angular 14';
getData(){
  const data:dataType={
    name: "Sumit",
    id: 10,
    indian: true,
    address: "4b/24 andheri"
  }
  return data;
}
}
