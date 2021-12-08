import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from '../../model/cargo';
import { CargoService } from '../../services/cargo.service';

@Component({
  selector: 'app-root',
  templateUrl: './cargo.component.html',
})
export class CargoComponent {
  cargos: Cargo[] | undefined;

  constructor(private cargoService: CargoService, private router : Router) {}

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getCargos().subscribe((cargos: Cargo[]) => {
      this.cargos = cargos;
      console.log(this.cargos);
    });
  }

  mostrarCargo(cargo: Cargo) {
    this.cargoService.getCargoPorId(cargo.id).subscribe((cargo: Cargo) => {
      this.router.navigate(["/listarCargos", cargo.id])
    })
  }

  editarCargo(cargo: Cargo) {
    this.router.navigate(["/", "home"])
  }

  deletarCargo(cargo: Cargo) {}
}
