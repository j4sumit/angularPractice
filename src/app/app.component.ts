import { Component } from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
 loginForm= new FormGroup({
  name:new FormControl(""),
  email:new FormControl(""),
  password: new FormControl("")
 })
 loginUser()
 {
  console.log(this.loginForm.value)
 }
}
