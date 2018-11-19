import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { IngredientsService } from '../../services/Ingredients.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amountInputRef: ElementRef;
  private subscription: Subscription;
  private subscrip: Subscription;
  editedItem:Ingredient;
  @ViewChild('f')slForm:NgForm;
  editMode=false;
  indexEditedItem:number;
  constructor(private ingredientService: IngredientsService) { }
  
ngOnInit(){
  this.subscrip=this.ingredientService.actlist.subscribe();
  this.subscription=this.ingredientService.startedEditing.subscribe((index:number)=>

  {

    this.editedItem=this.ingredientService.getIngredient(index);
    console.log(this.editedItem);
    this.indexEditedItem=index;
    this.editMode=true;
    this.slForm.setValue({
      name: this.editedItem.name,
      amount: this.editedItem.amount
    })
  })
}
ngOnDestroy (){
this.subscription.unsubscribe();
this.subscrip.unsubscribe();
}
  onAddItem(form: NgForm){
    //const name = this.nameInputRef.nativeElement.value;
    //const amount = this.amountInputRef.nativeElement.value;
    const value=form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.ingredientService.updateIngredient(this.indexEditedItem, newIngredient);
      this.ingredientService.actlist.next();
    }else{
      this.ingredientService.addIngredient(newIngredient);
      this.ingredientService.actlist.next();
    }
    
    //this.clearInputs();
  }
  Delete(){
    this.ingredientService.deletIngredient(this.indexEditedItem);
    this.ingredientService.actlist.next();
    this.slForm.resetForm();
    this.Clear();
  }
  Clear(){
    this.slForm.resetForm();
    this.editMode=false;

  }

 /* clearInputs(){
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }*/

}
