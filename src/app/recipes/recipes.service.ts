import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Wiener_Schnitzel_in_Wachwitz_%281%29.JPG/1280px-Wiener_Schnitzel_in_Wachwitz_%281%29.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Spaghetti-prepared.jpg/1280px-Spaghetti-prepared.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  recipesChangedEvent = new Subject<Recipe[]>();

  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === id;
    })
  }}

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id;
    });
    this.recipesChangedEvent.next(this.recipes.slice());
  }

  // addRecipe() {
    // nothing for now
  // }
}
