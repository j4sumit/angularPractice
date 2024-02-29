import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
count = 0;
counter(data:string){
  data =="increment"? this.count++ :this.count--
  // this.count++
}
}
