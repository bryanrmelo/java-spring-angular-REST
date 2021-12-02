import { CargoService } from './services/cargo.service';
import { Component } from '@angular/core';

import { ICargo } from './model/cargo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular';

  cargos: ICargo[] | undefined;

  constructor(private cargoService: CargoService) {}

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getCargos().subscribe((cargos: ICargo[]) => {
      this.cargos = cargos;
      console.log(this.cargos);
    });
  }
}
