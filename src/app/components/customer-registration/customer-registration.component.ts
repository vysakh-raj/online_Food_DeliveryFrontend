import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']  // Note the correct 'styleUrls' syntax
})
export class CustomerRegistrationComponent {
  customer: any = {};

  constructor(private foodService: FoodService) { }

  registerCustomer(): void {
    this.foodService.registerCustomer(this.customer).subscribe(response => {
      console.log('Customer registered:', response);
      // Add any additional logic here, such as redirecting to a different page or displaying a success message
    }, error => {
      console.error('Registration error:', error);
      // Add error handling logic here, such as displaying an error message to the user
    });
  }
}
