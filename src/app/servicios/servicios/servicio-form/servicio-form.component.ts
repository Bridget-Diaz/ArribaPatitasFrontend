import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Servicio, ServicioService } from '../servicio.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-servicio-form',
  standalone: true, 
  imports: [FormsModule, HeaderComponent], 
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
      // 🟡 Confirmación antes de actualizar
      Swal.fire({
        title: '¿Seguro que deseas actualizar?',
        text: 'Este servicio será modificado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.servicioService.actualizar(this.servicio.id!, this.servicio)
            .subscribe(() => {
              Swal.fire({
                title: '¡Actualizado!',
                text: '✅ Este servicio fue actualizado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              }).then(() => {
                this.router.navigate(['/servicios']);
              });
            });
        }
      });

    } else {
      // 🟢 Guardar nuevo servicio
      this.servicioService.guardar(this.servicio)
        .subscribe(() => {
          Swal.fire({
            title: '¡Guardado!',
            text: '✅ Nuevo servicio agregado con éxito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/servicios']);
          });
        });
    }
  }

  cancelar() {
  this.router.navigate(['/servicios']);
}
}
