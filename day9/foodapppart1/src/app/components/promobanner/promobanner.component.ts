import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-promobanner',
  standalone: true,
  imports: [],
  templateUrl: './promobanner.component.html',
  styleUrl: './promobanner.component.css'
})
export class PromobannerComponent {
  promoMessage: string = 'We have a special post diwali offer!!!!';
  constructor() {
    console.log('constructor executed');
  }
  ngOnInit() {
    console.log('ng on init triggered');
  }
  ngOnChanges(changes: SimpleChange): void {
    console.log('ngOnChanges:', changes);
     
        console.log('ng on changes triggered');
  }
checkOffer(){
    this.promoMessage = 'We have a special post diwali offer ending in 2 days';
}


  ngOnDestroy() {
    console.log('ng destroy triggered');
  }

}
