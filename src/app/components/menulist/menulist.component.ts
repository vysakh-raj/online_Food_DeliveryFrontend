import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Menu } from '../../../models/menu.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrl: './menulist.component.css'
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(): void {
    this.foodService.getMenus().subscribe(
      (data: Menu[]) => {
        this.menus = data;
      },
      error => {
        console.error('Error fetching menu items:', error);
        this.errorMessage = 'An error occurred while fetching menu items. Please try again.';
      }
    );
  }
  
  updateMenu(menuId: number): void {
    this.router.navigate(['/updatemenu', menuId]);
  }

  deleteMenu(menuId: number): void {
    this.foodService.deleteMenu(menuId).subscribe(
      () => {
        this.successMessage = 'Menu item deleted successfully!';
        this.getMenus(); // Refresh the menu list
      },
      error => {
        console.error('Error deleting menu item:', error);
        this.errorMessage = 'An error occurred while deleting the menu item. Please try again.';
      }
    );
  }
}
