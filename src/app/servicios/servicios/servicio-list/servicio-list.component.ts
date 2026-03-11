import { Component, OnInit } from '@angular/core';
import { Servicio, ServicioService } from '../servicio.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-servicio-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, HeaderComponent],
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})

export class ServicioListComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit() {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicioService.listar().subscribe(data => this.servicios = data);
  }

   eliminar(id: number) {
    Swal.fire({
      title: '¿Estás segura?',
      text: 'Este servicio será eliminado permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this.servicioService.eliminar(id).subscribe(() => {
          this.cargarServicios();
          Swal.fire({
            title: '¡Eliminado!',
            text: '🗑️ El servicio fue eliminado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        });
      }
    });
  }
}

