import { Component } from '@angular/core'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
  userDataisl=[
    {name:"Anil",email:"anil1@gmail.com"},
    {name:"Anil1",email:"anil2@gmail.com"},
    {name:"Anil2",email:"anil3@gmail.com"},
    {name:"Anil3",email:"anil4@gmail.com"}
  ]
}
