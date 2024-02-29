import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
color="red"
bgColor="green"

changeColor(){
  this.color="black"
  this.bgColor="yellow"
}
}
