import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(public userDatas : UserServiceService) { }
  datas:any;

  ngOnInit(): void {
    console.log(this.userDatas.users())
    this.datas=this.userDatas.users()
  }

}
