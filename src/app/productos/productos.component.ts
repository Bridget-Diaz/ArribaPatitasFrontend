

import { Component, OnInit } from '@angular/core';
//import { ProductoService, Producto } from './producto.service'; // ajustá el path si es necesario
import { ProductoService, Producto } from '../servicios/productos/producto.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'], // o template si lo estás haciendo inline
  imports: [CommonModule,HttpClientModule, RouterLink],
  providers:[ProductoService]
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        console.log('Productos cargados:', data);
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
    
  }

  //agregagdo para mas detalle
  //de tantos cambios ya perdi donde hiba el detalle
getStockClass(stock: number): string {
    if (stock < 5) return 'stock-bajo';
    if (stock < 15) return 'stock-medio';
    return 'stock-alto';
  }

}
