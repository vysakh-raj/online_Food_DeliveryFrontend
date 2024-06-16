// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7245/api';
  private userRole: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      tap(response => {
        this.userRole = response.role; // Store the user role
      })
    );
  }

  logout(): void {
    // Clear any stored authentication tokens or user data
    // For example, clear localStorage or session storage
    this.userRole = null;

    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return this.userRole;
  }
}
