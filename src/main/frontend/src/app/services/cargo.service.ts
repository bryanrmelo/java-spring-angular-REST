import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  url = 'http://localhost:8080/api/v1/cargos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getCargos(): Observable<Cargo[]> {
    return this.httpClient.get(this.url).pipe(
      map((data: any) => {
        return data._embedded.cargoList as Cargo[];
      })
    );
  }

  getCargoPorId(id: number): Observable<Cargo> {
    return this.httpClient.get<Cargo>(this.url + `/${id}`);
  }

  deleteCargo(id: number) {
    return this.httpClient.delete(this.url + '/' + id);
  }

  atualizar(cargo: Cargo) {
    console.log(JSON.stringify(cargo));
    console.log(this.httpOptions);
    return this.httpClient.put<Cargo>(
      this.url + '/' + cargo.id,
      JSON.stringify(cargo),
      this.httpOptions
    );
  }
}
