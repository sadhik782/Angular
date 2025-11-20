import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FoodStatsComponent } from './components/food-stats/food-stats.component';
import { FoodListComponent } from './components/food-list/food-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FoodStatsComponent,
    FoodListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {} // << THIS EXPORT MUST EXIST
