import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingridients:Ingridient [] =[
new Ingridient('Tomatoes',5),
new Ingridient('Aples',3)
];

  constructor() { }

  ngOnInit() {
  }

}
