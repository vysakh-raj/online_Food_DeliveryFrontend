
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../../../models/menu.models';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-updatemenu',
  templateUrl: './updatemenu.component.html',
  styleUrl: './updatemenu.component.css'
})
export class UpdateMenuComponent implements OnInit {
  menuId!: number;
  menu: Menu = {
    menuId:0,
    name: '',
    description: '',
    price: 0,
    restaurantName: '',
    
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    // Extract the menu ID from the route parameters
    this.route.params.subscribe(params => {
      this.menuId = params['id'];
      // Fetch the menu details based on the ID
      this.foodService.getMenu(this.menuId).subscribe(
        response => {
          this.menu = response;
        },
        error => {
          console.error('Menu retrieval error:', error);
          this.errorMessage = 'An error occurred while retrieving the menu details. Please try again.';
        }
      );
    });
  }

  updateMenu(): void {
    this.foodService.updateMenu(this.menuId, this.menu).subscribe(
      response => {
        console.log('Menu updated:', response);
        this.successMessage = 'Menu updated successfully!';
        // Optionally, navigate to a different page after successful update
        // For example:
        this.router.navigate(['/menulist']);
      },
      error => {
        console.error('Menu update error:', error);
        this.errorMessage = 'An error occurred while updating the menu. Please try again.';
      }
    );
  }
}
