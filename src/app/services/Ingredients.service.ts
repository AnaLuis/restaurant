import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
export class IngredientsService{
    actlist = new EventEmitter<void>();
    private ingredients: Ingredient[]=[
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples',3),
      ];

    getIngredientes(){//cualquier cambio dentro del ing service lo detecta
        return this.ingredients.slice();
    }
    addIngredient(nIngredient: Ingredient){
        this.ingredients.push(nIngredient);
        console.log(this.ingredients);
    }
    //se guarda en el arreglo con un for each
    addIngredients(auxIngredients: Ingredient[]){
        //for(const i of auxIngredients){
            //this.ingredients.push(i);
        //}

        for(var i of auxIngredients){
            var addIng = this.ingredients.find( Ingredient => Ingredient.name == i.name);
            if( addIng  === undefined){
               this.ingredients.push(i);
            }else{
                addIng.amount= addIng.amount + i.amount;
            }
        }

    }
}