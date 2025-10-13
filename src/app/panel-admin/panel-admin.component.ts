import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css'],
  imports: [CommonModule, RouterLink]
})
export class PanelAdminComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
