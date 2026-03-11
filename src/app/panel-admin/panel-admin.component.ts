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
   pawPrints = [
    { left: '10%', delay: '0s' },
    { left: '25%', delay: '5s' },
    { left: '40%', delay: '2s' },
    { left: '55%', delay: '8s' },
    { left: '70%', delay: '4s' },
    { left: '85%', delay: '10s' },
  ];

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
