import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] | undefined;

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
      console.log(this.clientes);
    });
  }

  criarCliente() {
    this.router.navigate(['clientes/novo'])
  }

  mostrarCliente(id : number) {
    this.router.navigate(['clientes/detalhes', id]);
  }

  editarCliente(id: number) {
    this.router.navigate(['clientes/editar', id]);
  }

  deletarCliente(id: number) {
  }
}
