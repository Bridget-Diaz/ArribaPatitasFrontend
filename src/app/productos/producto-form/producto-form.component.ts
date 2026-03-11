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


  selectedFile: File | null = null;// SE AGREGO ETA VAINA PARA LA IMAGEN SI TODO DA ERROR ELIMINARLA AHORITA XD SOLO COMENTO POR SI DA UN ERROR GRAVISIMO PERO SI FUNCIONA ASI :D (NO TOCAR)

  editando = false;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  onFileSelected(event: any) {//ESTE METODO ES PARA SELECCIONAR LA IMAGEN SI TODO DA ERROR ELIMINARLO AHORITA XD SOLO COMENTO POR SI DA UN ERROR GRAVISIMO PERO SI FUNCIONA ASI :D (NO TOCAR)
    this.selectedFile = event.target.files[0];
  }


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
  /*guardar(): void {
    if (this.editando) {
      this.productoService.actualizarProducto(this.producto.id!, this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productoService.guardarProducto(this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }*/

  guardar(): void {

  if (!this.selectedFile && !this.editando) {
    alert("Selecciona una imagen antes de guardar");
    return;
  }

  if (this.editando) {

    // Si está editando y NO selecciona imagen, solo actualiza normal
    if (!this.selectedFile) {
      this.productoService.actualizarProducto(this.producto.id!, this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
      return;
    }

    // Si está editando y SÍ selecciona imagen
    this.productoService.actualizarProductoConImagen(this.producto.id!, this.producto, this.selectedFile)
      .subscribe(() => {
        this.router.navigate(['/productos']);
      });

  } else {

    // Nuevo producto con imagen
    this.productoService.guardarProductoConImagen(this.producto, this.selectedFile!)
      .subscribe(() => {
        this.router.navigate(['/productos']);
      });
  }
}


    
}
