import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicfooddataComponent } from './basicfooddata/basicfooddata.component';
import { FooditemsummaryComponent } from './fooditemsummary/fooditemsummary.component';
import { RatingPipe } from './rating.pipe';
import { GenderPipe } from './gender.pipe';
import { FoodcategorylistComponent } from './foodcategorylist/foodcategorylist.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicfooddataComponent,FooditemsummaryComponent,RatingPipe,GenderPipe, FoodcategorylistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodapppart1';
  foodRating:number = 3.5;
  gender: string = 'M';
}
