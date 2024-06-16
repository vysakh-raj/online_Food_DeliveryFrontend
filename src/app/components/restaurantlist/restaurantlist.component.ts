import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../models/restaurant.model'; // Import the Restaurant model
import { FoodService } from '../../services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrl: './restaurantlist.component.css'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    // Call a method to fetch all restaurants from the service upon component initialization
    this.fetchRestaurants();
  }

  fetchRestaurants(): void {
    this.foodService.getRestaurants().subscribe(
      (restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  updateRestaurant(restaurant: Restaurant): void {
    // Implement the logic to navigate to the update restaurant page with the restaurant ID
    // For example:
     this.router.navigate(['/updateres', restaurant.restaurantId]);
  }

  deleteRestaurant(restaurantId: number): void {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.foodService.deleteRestaurant(restaurantId).subscribe(
        () => {
          // Remove the deleted restaurant from the local array
          this.restaurants = this.restaurants.filter((restaurant) => restaurant.restaurantId !== restaurantId);
        },
        (error) => {
          console.error('Error deleting restaurant:', error);
        }
      );
    }
  }
}

