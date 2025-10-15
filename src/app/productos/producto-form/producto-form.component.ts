import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService, Producto } from '../../servicios/productos/producto.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
producto: Producto = { nombre: '', descripcion: '', precio: 0, stock: 0 };

  editando = false;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  //de tanto true false es una webada
  //parametro void que define una constante o variable id que se extrae de un get por id entonces si 
  //ese id cumple con las condiciones(e verdadero) se obtendra el producto por id 

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.productoService.obtenerProductoPorId(Number(id)).subscribe(p => this.producto = p);
    }
  }

  //aca simiñar pero esta vez si se selecciona el editando para llamar al metodo de actualizarProducto por id del producto 
  //subscribe es para suscribirse a mi canal mis redes sosciales
  //estara navegando hasta hallar productos
  //de lo contrario se guarda un nuevo producto pero usa el mismo html pa mas placer
  guardar(): void {
    if (this.editando) {
      this.productoService.actualizarProducto(this.producto.id!, this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productoService.guardarProducto(this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}
