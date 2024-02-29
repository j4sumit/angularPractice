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
  {name:"Sumit", Email:"Sumit@gmail.com", SocialAccount:["LinkedIN","Wapp","FB"]},
  {name:"Amit", Email:"aumit@gmail.com", SocialAccount:["FB","LinkedIN","Wapp"]},
  {name:"Sanjay", Email:"Sanjay@gmail.com", SocialAccount:["Wapp","FB","LinkedIN"]},
  {name:"Rahul", Email:"Rahul@gmail.com", SocialAccount:["YouTube","FB","LinkedIN"]}
]
}
