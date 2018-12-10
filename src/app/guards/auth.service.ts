import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  log=new Subject<boolean>();
  private isloggedIn: boolean = false;
  constructor() { }

   login(email: string,password: string): boolean{
    if(email=="ana@gmail.com" && password=="12345"){
      console.log(email== "ana@gmail.com" && password=="12345")
      this.isloggedIn= true;

    }else{
      this.isloggedIn=false;
    }
    return this.isloggedIn; 
   }
   isUserLoggedIn(){
     return this.isloggedIn;
   }
   userLoggedIn():boolean{
     return this.isloggedIn;
   }
   userLogOut(){
     this.log.next(false);
     this.isloggedIn=false;
   }
}
