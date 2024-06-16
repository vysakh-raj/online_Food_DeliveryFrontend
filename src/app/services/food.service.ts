import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Menu } from '../../models/menu.models';
import { Order } from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})



export class FoodService {
  addMenu(menu: Menu) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://localhost:7245/api';  // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Customer registration
  registerCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/customer/register`, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


  // Customer login
  loginCustomer(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }


  // CRUD operations for menu
  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/menu`);
  }


  getMenu(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/${id}`);
  }

  createMenu(menu: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/menu`, menu);
  }

  updateMenu(id: number, menu: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/menu/${id}`, menu);
  }

  deleteMenu(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/menu/${id}`);
  }

  // CRUD operations for restaurant
  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/restaurant`);
  }

  getRestaurant(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/restaurant/${id}`);
  }

  createRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/restaurant`, restaurant);
  }

  updateRestaurant(id: number, restaurant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/restaurant/${id}`, restaurant);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/restaurant/${id}`);
  }
  placeOrder(order: Order): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order`, order);
  }
}
