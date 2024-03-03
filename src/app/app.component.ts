import { Component } from '@angular/core'

import { UserServiceService } from './service/user-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Angular 14';
constructor(private userDatas: UserServiceService) { }
datas:any;
  ngOnInit(): void {
this.datas=this.userDatas.users()
console.log("mainpage",this.userDatas.users())
  }

}
