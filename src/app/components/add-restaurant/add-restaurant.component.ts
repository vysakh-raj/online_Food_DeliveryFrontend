import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Router } from '@angular/router';
import { Restaurant } from '../../../models/restaurant.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css'
})
export class AddRestaurantComponent {
  successMessage: string = '';
  restaurant: Restaurant = new Restaurant();
  errorMessage: string = '';

  constructor(private foodService: FoodService, private router: Router) { }

  createRestaurant(): void {
    this.foodService.createRestaurant(this.restaurant).subscribe(
      response => {
        console.log('Restaurant created:', response);
        this.successMessage = 'Restaurant created successfully!';
        // Clear the form after successful creation
        // Implement this logic according to your application's requirements
        // For example, you may want to reset the form fields or navigate to a different page
      },
      error => {
        console.error('Restaurant creation error:', error);
        this.errorMessage = 'An error occurred while creating the restaurant. Please try again.';
      }
    );
  }
}