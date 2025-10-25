import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component'; 

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterLink, HeaderComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css',
  providers:[ MascotaService]
})
export class MascotasComponent {
    mascotas: Mascota[] = [];
  
    constructor(private mascotaService: MascotaService) {}
  
    ngOnInit(): void {
      this.mascotaService.obtenerMascotas().subscribe({
        next: (data) => {
          console.log('Mascotas cargadas:', data);
          this.mascotas = data;
        },
        error: (err) => {
          console.error('Error al cargar mascotas:', err);
        }
      });
    }
}
