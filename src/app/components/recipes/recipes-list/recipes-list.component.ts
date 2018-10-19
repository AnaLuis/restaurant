import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
@Output() recipeitem = new EventEmitter<Recipe>();

recipes: Recipe[] = [
 new Recipe('A test Recipe', 'This is a simply test', "https://api-content.prod.pizzahutaustralia.com.au/media/1738/meat-ham-lovers-pizza-3291-menu.jpg"),
 new Recipe('A test Recipe', 'This is a simply test', "https://api-content.prod.pizzahutaustralia.com.au/media/1738/meat-ham-lovers-pizza-3291-menu.jpg"),
 new Recipe('A test Recipe', 'This is a simply test', "https://api-content.prod.pizzahutaustralia.com.au/media/1738/meat-ham-lovers-pizza-3291-menu.jpg"),
 new Recipe('A test Recipe', 'This is a simply test', "https://api-content.prod.pizzahutaustralia.com.au/media/1738/meat-ham-lovers-pizza-3291-menu.jpg"),
 new Recipe('A test Recipe', 'This is a simply test', "https://api-content.prod.pizzahutaustralia.com.au/media/1738/meat-ham-lovers-pizza-3291-menu.jpg")
]
  constructor() { }

  ngOnInit() {
  }

}
