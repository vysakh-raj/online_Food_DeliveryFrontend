import { Component,OnInit } from '@angular/core';
import { Restaurant } from '../../../models/restaurant.model';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrl: './update-restaurent.component.css'
})
export class UpdateRestaurantComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Get the restaurant ID from the route parameters
      this.loadRestaurant(id);
    });
  }

  loadRestaurant(id: number): void {
    this.foodService.getRestaurant(id).subscribe(
      (restaurant: Restaurant) => {
        this.restaurant = restaurant;
      },
      (error) => {
        console.error('Error fetching restaurant:', error);
      }
    );
  }

  updateRestaurant(): void {
    this.foodService.updateRestaurant(this.restaurant.restaurantId, this.restaurant).subscribe(
      (response) => {
        console.log('Restaurant updated:', response);
        this.router.navigate(['/restaurentList']); // Navigate back to the restaurant list after update
      },
      (error) => {
        console.error('Error updating restaurant:', error);
      }
    );
  }
}
