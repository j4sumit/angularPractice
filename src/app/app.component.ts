import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
  getName(name:string, secondName:string){
    alert(name)
    alert(secondName)
  }
  
}
