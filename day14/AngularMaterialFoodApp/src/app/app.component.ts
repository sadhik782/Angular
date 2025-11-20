import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackRatingComponent } from './feedback-rating/feedback-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeedbackRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMaterialFoodApp';
}
