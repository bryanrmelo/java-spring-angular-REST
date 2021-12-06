import { Component, OnInit } from '@angular/core';

import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './listaFuncionarios.component.html',
})
export class FuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] | undefined;

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((funcionarios: Funcionario[]) => {
        this.funcionarios = funcionarios;
        console.log(this.funcionarios);
      });
  }
}
