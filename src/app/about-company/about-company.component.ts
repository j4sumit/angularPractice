import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {

  constructor(private userDatas: UserServiceService) { }
datas:any;
  ngOnInit(): void {
this.datas=this.userDatas.users()
  }

}
