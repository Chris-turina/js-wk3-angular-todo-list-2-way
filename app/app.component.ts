import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  currentFocus: string = 'Recipe Box';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Pizza', ['Sauce','Dough','Cheese',]),
    new Recipe('Nachos', ['Beef','Cream','Beans','Chips',])

  ];
  selectedRecipe = null;
  showIngreds = null;

  toggleShowIngredients(clickedName)  {
    clickedName.showIngreds = !clickedName.showIngreds;
  }


  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishEditing() {
    this.selectedRecipe = null;
    this.showIngreds = null;
  }
}

export class Recipe {
  public done: boolean = false;
  constructor(public name: string, public ingredients: string[] ) { }
}
