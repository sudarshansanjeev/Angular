import { Component, OnInit } from '@angular/core';
import {RestService } from '../rest.service';
import { User } from './user';
import {Response } from '@angular/http/src/static_response';
@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

   user :User = { "id" : 0 , "name" : "arun" ,"age" : 1}; 
   users : User[] =[];
   errorMsg : string;
   errorMsgDel : string;
  constructor(private restService: RestService) { }

  ngOnInit() {
  }
  getItem(id){
    this.restService.getUser(id)
    .subscribe( 
      (response: Response) => this.user = response.json(),
      (error)=>{
        console.log("Record with id "+id+" doesn't exist ")
        this.errorMsg = "Record with id "+id+" doesn't exist ";}
     )
  }


postItem(id,name,age){
  let user1=new User(id,name,age);
  this.restService.postUser(user1) 
    .subscribe(
      (response:any)=>console.log('Put Successfully')
      )
}


deleteItem(id){
  this.restService.deleteUser(id)
  .subscribe(
    (response:any)=> console.log('Deleted Successfully'),
    (error)=> {
      console.log("Record with id "+id+ " doesnt exist")
      this.errorMsgDel = "Record with id "+id+ " doesnt exist" ;}
    )
}


displayAllItems(){
  this.restService.getAllUsers()
    .subscribe(
      (response:any)=> this.users = response
    )
}
}
