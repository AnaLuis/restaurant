import { Ingredient } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
export class IngredientsService{
    actlist = new Subject<void>();
    startedEditing=new Subject<number>();
    private ingredients: Ingredient[]=[
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples',3),
      ];

    getIngredientes(){//cualquier cambio dentro del ing service lo detecta
        return this.ingredients.slice();
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }
    updateIngredient(index:number,ingredient:Ingredient){
        this.ingredients[index]=ingredient;
        

    }
    deletIngredient(index:number){
        this.ingredients.splice(index,1);

    }
    
    addIngredient(nIngredient: Ingredient){
        this.ingredients.push(nIngredient);
        console.log(this.ingredients);
    }
    //se guarda en el arreglo con un for each
    addIngredients(auxIngredients: Ingredient[]){
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