import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetialComponent } from './recipes/recipes-detial/recipes-detial.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { IngredientsService } from './services/Ingredients.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipesDetialComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [//Uso de servicios por padre
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
