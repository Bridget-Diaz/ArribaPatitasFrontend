import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 Este es el que faltaba

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule] // 👈 Agrégalo aquí también
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {//marcelo aqui estala contrasenia wa
    if (this.username === 'admin' && this.password === 'superpet123') {
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/panel']);

    } else {
      alert('Credenciales incorrectas');
    }
  }
}
