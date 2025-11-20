import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-promobanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promobanner.component.html',
  styleUrl: './promobanner.component.css'
})
export class PromobannerComponent {
  
  @Input() promoText: string = 'Hurry!!!!!🎉 50% OFF on all orders';
  @Input() visibleDuration: number = 5;

  countdown!: number;
  intervalId!: any;

  isVisible: boolean = false;

  constructor() {
    console.log('Constructor: PromoBannerComponent created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component Initialized');

    this.countdown = this.visibleDuration;   // FIX

    if (this.visibleDuration > 0) {
      this.isVisible = true;
      this.startVisibilityTimer();
    }
  }

  startVisibilityTimer(): void {
    this.intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.isVisible = false;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component destroyed');
    clearInterval(this.intervalId);
  }
}
