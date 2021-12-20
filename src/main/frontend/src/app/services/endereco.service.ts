import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  url = 'http://localhost:8080/api/v1/clientes/endereco';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  criarEndereco(endereco: Endereco) {
    return this.httpClient.post<Endereco>(
      this.url,
      JSON.stringify(endereco),
      this.httpOptions
    );
  }
}
