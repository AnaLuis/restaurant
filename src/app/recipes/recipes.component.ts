import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]    
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {
   }

  ngOnInit() {
   //Suscribirse una vez k ay un ecento se actualiza
   this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.recipeSelected = recipe;
      }
   );
    //Antes del constructor
  }

}
