import { Injectable } from '@angular/core';
import { dataType } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData(){
    const data:dataType={
      name: "Sumit",
      id: 10,
      indian: true,
      address: "4b/24 andheri"
    }
    return data;
  }
}
