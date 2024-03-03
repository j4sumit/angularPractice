import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
url="http://localhost:3000/user"
  constructor(private http:HttpClient) { 
  }
  users(){
    return this.http.get(this.url)
  }
}
