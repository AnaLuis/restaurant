import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() feactureSelected = new EventEmitter<string>();
  constructor(private authService:AuthService,private router:Router) { }
  logAction:boolean=false;
  suscribeObject;
  /*onSelect(feacture:string){
   this.feactureSelected.emit(feacture);
  }*/
  ngOnInit() {  
    this.suscribeObject=this.authService.log.subscribe((s)=>{
      this.logAction= s;
    })
  }
  ngOnDestroy(){
    this.suscribeObject.unsuscribe();
  }
  onLogout(){
    if(this.logAction){
      this.authService.userLogOut();
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
