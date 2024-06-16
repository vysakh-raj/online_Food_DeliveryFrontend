import { Component } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Menu } from '../../../models/menu.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']  // Corrected property name from 'styleUrl' to 'styleUrls'
})
export class AddMenuComponent {
  menu: Menu = {
    menuId: 0,  // Assuming you have an ID field, initialize it properly
    name: '',
    description: '',
    price: 0,
    restaurantName: ''
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private foodService: FoodService, private router: Router) { }

  addMenu(): void {
    this.foodService.createMenu(this.menu).subscribe(
      (response: any) => {
        console.log('Menu item added:', response);
        this.successMessage = 'Menu item added successfully!';
        this.menu = {  // Clear the form after successful addition
          menuId: 0,
          name: '',
          description: '',
          price: 0,
          restaurantName: ''
        };
      },
      (error: any) => {
        console.error('Error adding menu item:', error);
        this.errorMessage = 'An error occurred while adding the menu item. Please try again.';
      }
    );
  }
}
