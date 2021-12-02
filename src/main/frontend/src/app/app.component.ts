import { HttpClient } from '@angular/common/http';
import { CargoService } from './services/cargo.service';
import { Component } from '@angular/core';

import { Cargo } from './model/cargo';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular';

  cargos: Cargo[] | undefined;

  constructor(private cargoService: CargoService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getCargos().subscribe((cargos: Cargo[]) => {
      this.cargos = cargos;
      console.log(this.cargos);
    });
  }
}
