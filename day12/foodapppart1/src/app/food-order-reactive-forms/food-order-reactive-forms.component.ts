import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-order-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './food-order-reactive-forms.component.html',
  styleUrl: './food-order-reactive-forms.component.css'
})
export class FoodOrderReactiveFormsComponent {

  orderForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.orderForm = fb.group({
      customerName: new FormControl('', [
        Validators.required,
        this.noNumbersValidator,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d{10}$'),  // FIXED
      ]),
      address: new FormControl('', [Validators.required]),
      noOfItems: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      specialInstructions: new FormControl(''),
    });

    this.printValues();
  }

  printValues() {
    console.log("printvalues method is called");
    console.log("Customer Name:", this.customerName?.value);
    console.log("Email:", this.email?.value);
    console.log("Phone:", this.phone?.value);
  }

  get customerName() { return this.orderForm.get('customerName'); }
  get email() { return this.orderForm.get('email'); }
  get phone() { return this.orderForm.get('phone'); }
  get address() { return this.orderForm.get('address'); }
  get noOfItems() { return this.orderForm.get('noOfItems'); }
  get specialInstructions() { return this.orderForm.get('specialInstructions'); }

  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { hasNumber: true } : null;
  }
}
