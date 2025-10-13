import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class MenuComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
