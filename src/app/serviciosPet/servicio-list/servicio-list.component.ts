import { Component, OnInit } from '@angular/core';
import { Servicio, ServicioService } from '../../../app/servicios/servicio.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicio-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
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
    if (confirm('¿Seguro que deseas eliminar este servicio?')) {
      this.servicioService.eliminar(id).subscribe(() => this.cargarServicios());
    }
  }
}

