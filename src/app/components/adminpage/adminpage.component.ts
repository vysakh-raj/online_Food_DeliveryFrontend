import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'] // Corrected property name
})
export class AdminpageComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    //this.router.navigate(['/login']);
  }
}
