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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
}
