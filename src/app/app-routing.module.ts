import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesDetialComponent } from './recipes/recipes-detial/recipes-detial.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
const routes: Routes=[
{//el full es obligatoria cuando tenga una url predeterminada
    path:'',redirectTo: '/recipes',pathMatch:'full'
},
{
    path:'recipes',component: RecipesComponent, children:[
        {path:'',component: RecipesStartComponent},
        {path: 'new',component: RecipesEditComponent},
        {path: ':id',component:RecipesDetialComponent},
        {path:':id/edit',component:RecipesEditComponent}
        
    ]
},
{
    path: 'shoppinglist',component:ShoppingListComponent
}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}