import { Injectable } from '@angular/core';
import foodDataFromFile from '../../assets/foodmenu.json'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  private foodMenuData: any;
  constructor(private objHttpClient:HttpClient) {
    this.foodMenuData = foodDataFromFile;
  }
  getFoodMenuDataFromFile() {
    return this.foodMenuData;
  }
    getFoodRecipeDataFromWebsite(){
   return this.objHttpClient.get('https://dummyjson.com/recipes');
    //https://dummyjson.com/recipes
  }
  getRecipeById(id: number) {
    return this.objHttpClient.get(`https://dummyjson.com/recipes/${id}`);
  }

}
