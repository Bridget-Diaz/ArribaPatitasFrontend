import { Component, OnInit } from '@angular/core';
import { Mascota, MascotaService } from '../servicios/mascota.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterLink],
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
