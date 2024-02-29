import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
users =["Sumit","amit","Sanjay","Rahual","Pramod"]
userDetails =[
  {name:"Sumit", Email:"Sumit@gmail.com", phone:"908904380911"},
  {name:"Amit", Email:"aumit@gmail.com", phone:"908904380922"},
  {name:"Sanjay", Email:"Sanjay@gmail.com", phone:"908904380933"},
  {name:"Rahul", Email:"Rahul@gmail.com", phone:"908904380944"}
]
}
