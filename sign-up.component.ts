import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { customer } from 'customer';
import {RestServiceService} from '../rest-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private restService: RestServiceService) { }

    title = 'form-app';
      form;
  checkPassword : boolean = true;

  cust : customer[] = []; 
    ngOnInit(){
      this.form=new FormGroup({
        firstname: new FormControl("",Validators.compose([
          Validators.required,Validators.maxLength(10),Validators.minLength(6),Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
  
        lastname: new FormControl("",this.nameValidator),
  
        age:new FormControl("",this.ageValidator),
  
        aadhar: new FormControl("",Validators.compose([
          Validators.required,Validators.pattern('[\\d]{10}')       
        ])),

        mobilenumber: new FormControl("",Validators.compose([
          Validators.required,Validators.pattern('[\\d]{10}')       
        ])),
        
        username: new FormControl("",Validators.compose([
          Validators.required,Validators.pattern('[\\d]*')       
        ])),

        email: new FormControl("",Validators.compose([Validators.required,Validators.pattern('[a-zA-z]\\w+@\\w+.com')
           ])),
  
       password:new FormControl("",Validators.required),
      
       confirmpassword:new FormControl("",Validators.required,) 
  })
}
nameValidator(control){
  if(control.value.length<4){
    return { "lastname":true}
  }
}
ageValidator(control){
  if(control.value<20||control.value>60){
    return {"age":true}
  }
}


mobileValidator(control){
  if(control.value.length!=3){
    return { "mobile":true }
  }
}
password_check(password,confirmpassword){
    if(password!=confirmpassword){
        this.checkPassword = false;
    }

}

onSubmit(myform){
  console.log(myform);
  console.log(myform.firstname);
  console.log(myform.lastname);
  console.log(myform.age); console.log(myform.mobilenumber); console.log(myform.aadhar);
   let cust= new customer(myform.username,
                        myform.firstname,
                        myform.lastname,
                        myform.age,
                        myform.mobilenumber,
                        myform.aadhar,                       
                        myform.email,
                        myform.password
                    )
    this.restService.postUser(cust)
    .subscribe((response:any)=> console.log('Customer added successfully...'))

        }
}