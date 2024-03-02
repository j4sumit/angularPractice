import { Component } from '@angular/core'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
list:any[]=[];
  addTask(data:string){
    this.list.push({id:this.list.length, name :data})
console.log(this.list)
  }
  removeItem(id:number){
this.list=this.list.filter((item)=> item.id!==id)
  }

}
