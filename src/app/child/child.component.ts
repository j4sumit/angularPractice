import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  // @Input() data:{name:string, email:string}={
  //   name: '',
  //   email: ''
  // };
  @ Input() item:any;

  ngOnInit(): void {
  }

}
