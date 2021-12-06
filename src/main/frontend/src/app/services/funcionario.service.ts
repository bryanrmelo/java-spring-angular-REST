import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  url = 'http://localhost:8080/api/v1/funcionarios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getFuncionarios(): Observable<Funcionario[]> {
    return this.httpClient.get(this.url).pipe(
      map((data: any) => {
        return data._embedded.funcionarios as Funcionario[];
      })
    );
  }

  getFuncionarioPorId(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(this.url + `/${id}`);
  }
}
