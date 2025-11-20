import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipedetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipedetails.component.html',
  styleUrl: './recipedetails.component.css'
})
export class RecipedetailsComponent {
  selectedID: any;
  selectedRecipe: any;
  constructor(private objRecipeRoute: ActivatedRoute, private objFoodMenuService: FoodMenuService) {
    this.objRecipeRoute.params.subscribe((param: any) => {
      this.selectedID = param['recipeid'];
      this.loadSpecificRecipeData();
    });
  }
  loadSpecificRecipeData() {
    this.objFoodMenuService.getRecipeById(this.selectedID).subscribe((data: any) => {
      this.selectedRecipe = data;
    });
  }
}
