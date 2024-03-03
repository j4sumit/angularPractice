import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor() { }
  users(){
    return [
      {name:"Sumit", age:32, email:"Sumit@gmail.com"},
      {name:"Amit", age:35, email:"amit@gmail.com"},
      {name:"Sanjay", age:40, email:"Sanjay@gmail.com"},
    ]
  }
}
