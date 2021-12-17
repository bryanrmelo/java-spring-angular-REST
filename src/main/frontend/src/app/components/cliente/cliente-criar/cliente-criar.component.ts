import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from './../../../model/cliente';
import { ClienteService } from './../../../services/cliente.service';

@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html',
})
export class ClienteCriarComponent implements OnInit {

  @ViewChild('myForm') templateForm: NgForm | undefined;

  cliente : Cliente = new Cliente()
  data: string = '';

  constructor(private clienteService : ClienteService, private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cliente.dataNascimento = formatDate(this.cliente.dataNascimento, 'yyyy-MM-dd', 'en_US')
    console.log(this.cliente)
    this.clienteService.criarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['clientes/'])
    })
  }

  getAdress(cep: String) {
    this.http.get(`http://viacep.com.br/ws/${cep}/json`).subscribe(
      endereco => {
        /*const values = this.templateForm?.value;
        values.endereco.bairro = 'meu bairro'
        this.templateForm?.setValue(values)*/

        this.templateForm?.form.patchValue({endereco: endereco})
      }
    )
  }
}
