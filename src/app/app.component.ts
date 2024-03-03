import { Component } from '@angular/core'
import { UserServiceService } from './services/user-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Angular 14';
users:any;
constructor(private userData : UserServiceService){
userData.users().subscribe((data)=>{
  console.log("data",data)
  this.users=data;
})
}

}
