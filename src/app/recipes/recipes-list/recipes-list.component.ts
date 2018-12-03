import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from "../recipes.model";
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[];
  Subcription;
  constructor(private recipeService:RecipeService, private router:Router,private route: ActivatedRoute) {

   }
 
  ngOnInit() {
    
   this.Subcription= this.recipeService.UpdateRecipes.subscribe((Recipe)=>{
      this.recipes=[];
      this.recipes = this.recipeService.getRecipes();
      
    })
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  ngOnDestroy(){
    this.Subcription.unsubscribe();
  }
}
