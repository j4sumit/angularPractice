import { Component } from '@angular/core'
import {FormControl, FormGroup,Validators} from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
 loginForm= new FormGroup({
  name:new FormControl("",[Validators.required,Validators.pattern('[a-zA-z]+$')]),
  email:new FormControl("",[Validators.required, Validators.email]),
  password: new FormControl("",[Validators.required, Validators.minLength(5)])
 })
 loginUser()
 {
  console.log(this.loginForm.value)
 }

 get name(){
  return this.loginForm.get("name")
 }
 get email(){
  return this.loginForm.get("email")
 }
 get password(){
  return this.loginForm.get("password")
 }

}
