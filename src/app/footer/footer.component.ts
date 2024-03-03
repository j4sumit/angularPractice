import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  users:any;
  constructor(private userData:UserServiceService) { 
    console.log("userData.users()",userData.users())
    userData.users().subscribe((data)=>{
      console.log("data",data)
      this.users=data;
    })  }

  ngOnInit(): void {
    
  }

}
