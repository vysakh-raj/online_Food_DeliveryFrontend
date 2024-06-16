import { Component,OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../models/order.model';
@Component({
  selector: 'app-adminorderview',
  templateUrl: './adminorderview.component.html',
  styleUrl: './adminorderview.component.css'
})
export class AdminorderviewComponent implements OnInit{
  orders: Order[] = [];
  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderservice.getOrders().subscribe(
      orders => this.orders = orders,
      error => console.error('Error loading orders:', error)
    );
  }
}
