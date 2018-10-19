import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
const routes: Routes=[
{//el full es obligatoria cuando tenga una url predeterminada
    path:'',redirectTo: '/recipes',pathMatch:'full'
},
{
    path:'recipes',component: RecipesComponent
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