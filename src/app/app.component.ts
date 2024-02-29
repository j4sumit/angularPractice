import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
  getName(){
    console.log("Function called")
  }
  getData(data:any){
    console.log(data)
  }
  getKeyDown(data:any){
    console.log(data)
  }
  getKeyBlur(data:any){
    console.log(data)
  }
  getKeyInput(data:any){
    console.log(data)
  }
  getData1(data:any){
    console.log(data)
  }
}
