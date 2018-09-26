import { Component, OnInit, Input, Output ,EventEmitter,} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe:Recipe;
@Output() recipeSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    //console.log("bandera 1")
    this.recipeSelected.emit();
  }

}
