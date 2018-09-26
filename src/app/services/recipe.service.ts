import { Recipe } from "../recipes/recipe.model";

export class RecipeService{
    recipes: Recipe[]=[
        new  Recipe('A test recipe1','This is a simple test','https://cnnespanol2.files.wordpress.com/2015/06/screen-shot-2015-06-12-at-10-06-01-am.png?w=908&h=508&crop=1'),
        new  Recipe('A test recipe2','This is a simple test','https://cnnespanol2.files.wordpress.com/2015/06/screen-shot-2015-06-12-at-10-06-01-am.png?w=908&h=508&crop=1'),
        new  Recipe('A test recipe3','This is a simple test','https://cnnespanol2.files.wordpress.com/2015/06/screen-shot-2015-06-12-at-10-06-01-am.png?w=908&h=508&crop=1')
        ];
        getRecipes(){
            return this.recipes;
        }
}
