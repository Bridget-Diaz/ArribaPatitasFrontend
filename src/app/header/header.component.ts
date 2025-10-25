import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    sessionStorage.clear();

    this.router.navigate(['/login']);
  }

  goToPanel() {
    this.router.navigate(['/panel']);
  }

}
