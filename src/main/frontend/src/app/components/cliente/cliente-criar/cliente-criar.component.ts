import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Cliente } from './../../../model/cliente';
import { ClienteService } from './../../../services/cliente.service';

@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html',
})
export class ClienteCriarComponent implements OnInit {
  @ViewChild('myForm') templateForm: NgForm | undefined;

  cliente: Cliente = new Cliente();
  endereco: Endereco = new Endereco();
  data: string = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(
    private clienteService: ClienteService,
    private enderecoService: EnderecoService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    try {
      this.cliente.dataNascimento = formatDate(
        this.cliente.dataNascimento,
        'yyyy-MM-dd',
        'en_US'
      );
    } catch (exception) {
      this.cliente.dataNascimento = '';
    }
    console.log(this.cliente);
    this.cliente.endereco = this.endereco;

    this.enderecoService
      .criarEndereco(this.cliente.endereco)
      .subscribe(endereco => {
        endereco.id = this.cliente.endereco.id;
      });

    this.clienteService.criarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['clientes/']);
    });
  }

  getAdress(cep: String) {
    this.http
      .get(`http://viacep.com.br/ws/${cep}/json`, this.httpOptions)
      .subscribe((endereco) => {
        this.templateForm?.form.patchValue({ endereco: endereco });
      });
  }
}
