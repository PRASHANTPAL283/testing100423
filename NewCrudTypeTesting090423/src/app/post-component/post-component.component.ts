import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent {

 constructor(public fb:FormBuilder,public router:Router){
  
 }
 userList:User[]=[];

 userModel=this.fb.group({
  name:[''],
  city:[''],
  email:['']
 })
 test:User={name:"prashant",city:"mainpuri",email:"palprashan"};

 addNewUser(value:any){
  console.log(value);
  let item1:any=localStorage.getItem('userList');
  console.log(item1)
  item1=JSON.parse(item1);
  item1.push(value);
  console.log(item1);
  item1=JSON.stringify(item1);
  localStorage.setItem('userList',item1);
  this.userModel.reset();
  this.router.navigate(['display'])
 

 }
}
