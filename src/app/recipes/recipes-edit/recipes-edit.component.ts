import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id:number;
editMode=false;
recipeForm:FormGroup;
  constructor(private route:ActivatedRoute,
    private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id= +params['id'];
      this.editMode = params['id']!=null? true: false; 
      this.initForm();
    })
  }

  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    const ingredients=new FormArray([]);
    //ingredientes
    if(this.editMode){
      const recipe =this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        for(const ingredient of recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }

      this.recipeForm=new FormGroup({
        'name':new FormControl(recipeName,Validators.required),
        'imagePath':new FormControl(recipeImagePath,Validators.required),
        'description':new FormControl(recipeDescription,Validators.required),
        'ingredients':ingredients
      });
    }else{
      this.recipeForm=new FormGroup({
        'name':new FormControl(null,Validators.required),
        'imagePath':new FormControl(null,Validators.required),
        'description':new FormControl(null,Validators.required),
        'ingredients': new FormArray([])
      });
    }
  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(),
      'amount':new FormControl(null,[Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }
  onSubmit(){
    var NewRecipe = new Recipe(this.recipeForm.get('name').value,
    this.recipeForm.get('description').value, this.recipeForm.get('imagePath').value,
    this.recipeForm.get('ingredients').value);
    console.log(NewRecipe);
    this.recipeService.addRecipe(NewRecipe);
    this.initForm()
  }
}
