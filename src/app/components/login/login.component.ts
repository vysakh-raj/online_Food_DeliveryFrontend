import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: any = {};
  loginMessage: string = ''; // To show error message

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe(
      response => {
        console.log('Login successful:', response);
        // Redirect based on role
        if (response.role === 'admin') {
          this.router.navigate(['/adminpage']); // Navigate to admin page
        } else if (response.role === 'customer') {
          this.router.navigate(['/customerpage']); // Navigate to customer page
        }
      },
      error => {
        console.error('Login error:', error);
        this.loginMessage = 'Invalid email or password.'; // Show error message
      }
    );
  }
}
