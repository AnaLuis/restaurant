import { Recipe } from "../recipes/recipes.model";
import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { IngredientsService } from "./Ingredients.service";
import { Subject } from "rxjs";

@Injectable()//para inyectar un servicio dentro de otro
export class RecipeService{
    UpdateRecipes = new Subject<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Pizza','Pizza hawaiana',
        'https://images.firstwefeast.com/complex/images/fl_lossy,q_auto/v1/xh7g5sgtximbqev3plah/pizza-hut-vs-dominos',
        [new Ingredient("Tomatoes",7), new Ingredient("Pineaple",1), new Ingredient("Sausage",5)]),
        new Recipe('Tortas','Tortas Cubanas',
        'http://tortaslamichoacana.com/wp-content/uploads/2014/02/392A4389.jpg',
        [new Ingredient("Cheese",4), new Ingredient("Bread",1), new Ingredient("Mayo",1), new Ingredient("Tomatoes",2)])
      ];
      //crear constructor
      constructor(private ingredientsService: IngredientsService){
      }

      getRecipes(){
          return this.recipes.slice();
      }
      //devuleve la receta que esta en dado posicion 
      getRecipe(index:number){
          return this.recipes[index];
      }
      //metodo para invocar desde la vista,recibe un arreglo de ingrediente y se lo pasa al metodo add
      addIngredientsToShoppingList(ingredients: Ingredient []){
          this.ingredientsService.addIngredients(ingredients);
      }
      addRecipe(recipe:Recipe){
          this.recipes.push(recipe);
          this.UpdateRecipes.next(recipe);
      }
      updateRecipe(index:number,recipe:Recipe){
          this.recipes[index]=recipe;
      }
      onDelete(index:number){
       this.recipes.splice(index,1);
       var reta=new Recipe('','','',[]);
       this.UpdateRecipes.next(reta);
      }

}
