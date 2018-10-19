import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feactureSelected = new EventEmitter<string>();
  constructor() { }
  onSelect(feacture:string){
   this.feactureSelected.emit(feacture);
  }
  ngOnInit() {     
  }

}
