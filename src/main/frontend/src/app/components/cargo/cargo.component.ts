import { Component } from '@angular/core';
import { Cargo } from '../../model/cargo';
import { CargoService } from '../../services/cargo.service';

@Component({
  selector: 'app-root',
  templateUrl: './listaCargos.component.html',
})
export class CargoComponent {
  cargos: Cargo[] | undefined;

  constructor(private cargoService: CargoService) {}

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
