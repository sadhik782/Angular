import { Injectable } from '@angular/core';
import foodDataFromFile from '../../assets/foodmenu.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    getFoodRecipeDataFromWebsite():Observable<any>{
   return this.objHttpClient.get('https://dummyjson.com/recipes');
    //https://dummyjson.com/recipes
  }
  getRecipeById(id: number) {
    return this.objHttpClient.get(`https://dummyjson.com/recipes/${id}`);
  }

}
