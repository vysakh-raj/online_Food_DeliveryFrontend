import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../../models/menu.models';
import { Order } from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiUrl = 'https://localhost:7245/api';
  
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    
    return this.http.get<Order[]>(`${this.apiUrl}/Order`); 
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.apiUrl}/menus`);
  }

  placeOrder(order: Order): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order`, order);
  }
}
