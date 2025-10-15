import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Mascota {
  id: number;
  propietario: string;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  peso: number;
  observaciones: string;
}

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl = 'http://localhost:8080/api/mascotas/listar';//nose que poner aqui 

  constructor(private http: HttpClient) {}

  obtenerMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);
  }
}