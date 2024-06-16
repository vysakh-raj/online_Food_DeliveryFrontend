import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';
import { Menu } from '../../../models/menu.models';
import { Order } from '../../../models/order.model';  // Import the correct Order interface

@Component({
  selector: 'app-menu-view',
  templateUrl: './menuview.component.html',
  styleUrls: ['./menuview.component.css']
})
export class MenuViewComponent implements OnInit {
  menus: Menu[] = [];
  customerName: string = '';
  deliveryAddress: string = '';
  selectedMenu: Menu | null = null;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.loadMenus();
  }

  loadMenus(): void {
    this.foodService.getMenus().subscribe(
      (menus: Menu[]) => this.menus = menus,
      error => console.error('Error loading menus:', error)
    );
  }

  openOrderForm(menu: Menu): void {
    this.selectedMenu = menu;
  }

  placeOrder(): void {
    if (this.selectedMenu) {
      const orderData: Order = {
        menuId: this.selectedMenu.menuId,
        customerName: this.customerName,
        deliverAddress: this.deliveryAddress,
        name: this.selectedMenu.name,
        description: this.selectedMenu.description,
        price: this.selectedMenu.price,
        restaurantName: this.selectedMenu.restaurantName
      };

      this.foodService.placeOrder(orderData).subscribe(
        response => {
          console.log('Order placed:', response);
         
          window.alert('Order placed successfully!');
          this.selectedMenu = null;
          this.customerName = '';
          this.deliveryAddress = '';
        },
        error => {
          console.error('Order placement error:', error);
        }
      );
    }
  }
}
