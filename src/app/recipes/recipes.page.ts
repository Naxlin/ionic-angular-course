import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  sub: Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.sub = this.recipesService.recipesChangedEvent.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipesService.getRecipes();
  }

}
