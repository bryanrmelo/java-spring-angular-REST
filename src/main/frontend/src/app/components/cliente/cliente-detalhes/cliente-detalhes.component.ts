import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../../../model/cliente';
import { ClienteService } from './../../../services/cliente.service';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
})
export class ClienteDetalhesComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clienteService
      .getClientePorId(this.route.snapshot.params.id)
      .subscribe((cliente) => {
        this.cliente = cliente;
      });

    this.clienteService
      .getProjetosFromCliente(this.route.snapshot.params.id)
      .subscribe((projetos) => {
        console.log(projetos);
        this.cliente.projetos = projetos;
      });
  }
}
