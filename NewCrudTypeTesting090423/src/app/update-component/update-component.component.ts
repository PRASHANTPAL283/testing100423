import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {

  constructor(public route:ActivatedRoute,public fb:FormBuilder,public router:Router){

  }
  user:User={
    name: '',
    city: '',
    email: ''
  }
  ngOnInit(){
    let name:any;
    this.route.paramMap.subscribe((value:ParamMap)=>{
      name=value.get('id');
    })
    let item:any=localStorage.getItem('userList');
    item=JSON.parse(item);
    item.forEach((val:any)=>{
      if(val.name===name){
        this.user=val
        console.log(this.user)
        this.userModel.patchValue({
          name:this.user.name,
          city:this.user.city,
          email:this.user.email
        })
      }
    })

  }

  userList:User[]=[];

 userModel=this.fb.group({
  name:[''],
  city:[''],
  email:['']
 })
 

 addNewUser(value:any){
  let item1:any=localStorage.getItem('userList');
  item1=JSON.parse(item1);
  item1=item1?.filter((ele:any)=>{
    return ele.name.toLocaleLowerCase()!==this.user.name.toLocaleLowerCase();

  })

  item1.push(value);
  item1=JSON.stringify(item1);
  localStorage.setItem('userList',item1);
  this.userModel.reset();
  this.router.navigate(['display'])
 

 }
}
