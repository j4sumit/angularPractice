import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
  name:any="";
  name1:any=""
  getData(data:any){
    this.name=data;
    console.log("data:-",data)
  }
  getName(data:any){
    this.name1=data;
    console.log("data:",data)
  }

}
