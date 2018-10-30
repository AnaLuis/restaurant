import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detial',
  templateUrl: './recipes-detial.component.html',
  styleUrls: ['./recipes-detial.component.css']
})
export class RecipesDetialComponent implements OnInit {
 //@Input() recipe:Recipe;
 id:number;
 recipe:Recipe;
  constructor(private recipeService: RecipeService,private route:ActivatedRoute,
    private router:Router ) {
   }
 
  ngOnInit() {
    this.route.params.subscribe ((param: Params)=>{
      this.id= +param['id'];
      this.recipe = this.recipeService.getRecipe(this.id);

    });
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
  onEditRecipe(){
    this.router.navigate(['edit'],{ relativeTo: this.route});

  }

}
