import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService, Cliente } from '../cliente.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterLink, HeaderComponent],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private ClienteService: ClienteService) {}

  ngOnInit(): void {
    this.ClienteService.getClientes().subscribe(data => {
      // Convertimos el string de fecha a objeto Date
    this.clientes = data.map(cliente => ({
  ...cliente,
  fechaRegistro: new Date(cliente.fechaRegistro)
}));
    });
  }
}
