import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../models/restaurant.model'; // Import the Restaurant model
import { FoodService } from '../../services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurentview',
  templateUrl: './restaurentview.component.html',
  styleUrls: ['./restaurentview.component.css'] // Corrected to styleUrls
})
export class RestaurentviewComponent implements OnInit { // Corrected class name casing
  restaurants: Restaurant[] = [];

  constructor(private foodService: FoodService, private router: Router) { } // Injected Router

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
}
