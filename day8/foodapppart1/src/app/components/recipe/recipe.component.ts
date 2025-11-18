import { Component } from '@angular/core';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipeData$:any;
  counter:number=0;
  constructor(private objFoodMenuService:FoodMenuService){
      this.recipeData$=this.objFoodMenuService.getFoodRecipeDataFromWebsite().pipe(
        tap((data:any)=>console.log('Recipe data:', data))
      )
  }

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
  }
}
