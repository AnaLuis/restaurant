import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
Ingredients : Ingredient[] = [
  new Ingredient("Tomatoes",5),
  new Ingredient("Onion",2)
];
  constructor() { }

  ngOnInit() {
  }

}
