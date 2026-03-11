import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Producto {
  id?: number;    //osea me daba mareo lo dejo asi y funciona :D (NO TOCAR)
  nombre: string;
  descripcion: string;
  categoria?: string; // Agrega el campo de categoría como opcional
  precio: number;
  stock: number;
  imagen?:  string; // Agrega el campo de imagen como opcional ACA ESTA EL CAMBIO IA MIRAME XD SOLO COMENTO POR SI DA UN ERROR GRAVISIMO PERO SI FUNCIONA ASI :D (NO TOCAR)
}

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos';
//https://www.youtube.com/watch?v=JHdkLUl3hxM
  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/listar`);
  }


guardarProducto(producto: Producto): Observable<Producto> {
  return this.http.post<Producto>(this.apiUrl, producto);
}

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  // DELETE /{id}
  eliminarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  //se agregaron estos metodos de aca pa abajo
guardarProductoConImagen(producto: Producto, file: File): Observable<Producto> {
  const formData = new FormData();

  formData.append("nombre", producto.nombre);
  formData.append("descripcion", producto.descripcion);
  formData.append("categoria", producto.categoria || "sinnada xd"); // 👈 si no usas categoria aún, pon fijo o crea campo
  formData.append("precio", producto.precio.toString());
  formData.append("stock", producto.stock.toString());
  formData.append("imagen", file);

  return this.http.post<Producto>(`${this.apiUrl}/guardar-con-imagen`, formData);
}

actualizarProductoConImagen(id: number, producto: Producto, file: File): Observable<Producto> {
  const formData = new FormData();

  formData.append("nombre", producto.nombre);
  formData.append("descripcion", producto.descripcion);
  formData.append("categoria", producto.categoria || "sinnada xd"); // 👈 si no usas categoria aún, pon fijo o crea campo
  formData.append("precio", producto.precio.toString());
  formData.append("stock", producto.stock.toString());
  formData.append("imagen", file);

  return this.http.put<Producto>(`${this.apiUrl}/actualizar-con-imagen/${id}`, formData);
}



}

