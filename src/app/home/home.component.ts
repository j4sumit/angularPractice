import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../service/user-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userData: UserServiceService) { }
datas:any;
  ngOnInit(): void {
    console.log(this.userData.users())
    this.datas=this.userData.users()
  }

}
