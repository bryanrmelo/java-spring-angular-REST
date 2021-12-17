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
  cargo: Cargo;

  constructor(private cargoService: CargoService, private router: Router) {}

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getCargos().subscribe((cargos: Cargo[]) => {
      this.cargos = cargos;
      console.log(this.cargos);
    });
  }

  criarCargo() {
    this.router.navigate(['/cargos/novo']);
  }
  mostrarCargo(id: number) {
    this.router.navigate(['/cargos/detalhes', id]);
  }

  editarCargo(id: number) {
    this.router.navigate(['/cargos/editar', id]);
  }

  deletarCargo(id: number) {
    this.cargoService.deleteCargo(id).subscribe(() => {
      this.getCargos();
    });
  }
}
