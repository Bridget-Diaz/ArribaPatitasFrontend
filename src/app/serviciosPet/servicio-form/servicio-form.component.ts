import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Servicio, ServicioService } from '../../../app/servicios/servicio.service';

@Component({
  selector: 'app-servicio-form',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {
  servicio: Servicio = { nombre: '', descripcion: '', precio: 0 };
  editando = false;

  constructor(
    private servicioService: ServicioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.servicioService.obtener(+id).subscribe(data => this.servicio = data);
    }
  }

  guardar() {
    if (this.editando) {
      this.servicioService.actualizar(this.servicio.id!, this.servicio)
        .subscribe(() => this.router.navigate(['/servicios']));
    } else {
      this.servicioService.guardar(this.servicio)
        .subscribe(() => this.router.navigate(['/servicios']));
    }
  }

  cancelar() {
  this.router.navigate(['/servicios']);
}
}
