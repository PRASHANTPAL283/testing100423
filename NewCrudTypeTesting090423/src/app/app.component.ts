import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewCrudTypeTesting090423';
  ngOnInit(){
    let test:User[]=[];
    let item:any=JSON.stringify(test);
    localStorage.setItem('userList',item);
    console.log(localStorage.getItem('userList'))
  }
}
