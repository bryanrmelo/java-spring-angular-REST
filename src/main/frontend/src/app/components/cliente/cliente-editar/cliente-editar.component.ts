import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
})
export class ClienteEditarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService
      .getClientePorId(this.route.snapshot.params.id)
      .subscribe((cliente) => {
        this.cliente = cliente;
      });
  }

  onSubmit(): void {
    this.clienteService.editarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/', 'listarClientes']);
    });
  }

}
