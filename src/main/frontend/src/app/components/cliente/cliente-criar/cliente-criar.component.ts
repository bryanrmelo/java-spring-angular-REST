import { Router } from '@angular/router';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../model/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html',
})
export class ClienteCriarComponent implements OnInit {

  constructor(private clienteService : ClienteService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(cliente: Cliente) {
    this.clienteService.criarCliente(cliente).subscribe(() => {
      this.router.navigate(['listarClientes/'])
    })
  }
}
