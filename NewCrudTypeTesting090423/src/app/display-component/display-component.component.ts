import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent {

  
  list:any[]=[];
  constructor(public router:Router){

  }

  ngOnInit(){
    let item:any=localStorage.getItem('userList');
    this.list=JSON.parse(item);
    console.log(this.list)
    this.list=this.list.sort((a,b)=>(a.name<b.name? -1:1));
    console.log(this.list)
  }
  navigate(){
this.router.navigate(['post']);
  }

  update(id:any){
    
    this.router.navigate(['update',id]);


  }

  deleteById(name:any){
    let item1:any=localStorage.getItem('userList');
    item1=JSON.parse(item1);
    item1=item1.filter((val:any)=>{
      return val.name!==name;
    })
    item1=JSON.stringify(item1);
    localStorage.setItem('userList',item1);
    this.ngOnInit();

  }
  

}
