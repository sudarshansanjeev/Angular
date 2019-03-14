import { Component } from '@angular/core';
import {Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  asynchData:string;
  myPromise : Promise<string>;
  abc() :void {
    this.myPromise = new Promise<string>(  
    (resolve, reject) =>{
      setTimeout(()=>resolve("Sunsoft Technologies !"), 5000 );
    }
    );

this.myPromise.then(value=>this.asynchData = value)
  .catch(error => console.log("CATCH:"+error))
}

xyz() : void {
  let myObservable = Observable.create((subscriber) => {
    subscriber.next("HELLO");
    subscriber.next("Hello hi");
    subscriber.next("Hopo fine");
    subscriber.complete();    
  });
  myObservable.subscribe(
    (data)=> console.log('success : '+data),
    (error)=> console.log('Error : '+error),
    () => console.log("completed...")
  )
}
}