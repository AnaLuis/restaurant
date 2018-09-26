import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
@Output () featureSelected=new EventEmitter<string>();
@Input() recipe:Recipe;
  constructor() {}
  ngOnInit() {
  }

}
