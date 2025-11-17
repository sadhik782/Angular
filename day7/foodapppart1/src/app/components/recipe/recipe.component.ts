import { Component } from '@angular/core';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipeData:any;
  constructor(private objFoodMenuService:FoodMenuService){
      this.objFoodMenuService.getFoodRecipeDataFromWebsite().subscribe((data:any)=>{
        this.recipeData = data
      })


  }


}
