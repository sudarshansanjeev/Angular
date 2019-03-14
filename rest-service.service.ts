import { Injectable } from '@angular/core';
import {customer} from 'Customer';
import {Http} from '@angular/http';
import 'rxjs/rx'; 
import {Response} from '@angular/http/src/static_response'
@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  url:string="http://localhost:3000/customers";
  
  constructor(private http:Http) { }

  postUser(cust:customer){
      return this.http.post(this.url,cust)
      .map((response:any)=>response);  
  }
}
