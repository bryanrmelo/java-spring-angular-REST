import { Projeto } from './../model/projeto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';
import { map } from 'rxjs/operators';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = 'http://localhost:8080/api/v1/clientes';

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

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get(this.url).pipe(
      map((data: any) => {
        return data._embedded.clienteList as Cliente[];
      })
    );
  }

  getClientePorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.url + `/${id}`);
  }

  getProjetosFromCliente(id: number): Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(this.url + `/${id}/projetos`).pipe(
      map((data: any) => {
        return data._embedded.projetos as Projeto[];
      })
    );
  }

  criarCliente(cliente: Cliente) {
    return this.httpClient.post<Cliente>(
      this.url,
      JSON.stringify(cliente),
      this.httpOptions
    );
  }

  editarCliente(cliente: Cliente) {
    return this.httpClient.put<Cliente>(
      this.url + '/' + cliente.id,
      JSON.stringify(cliente),
      this.httpOptions
    );
  }

  deleteCargo(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
