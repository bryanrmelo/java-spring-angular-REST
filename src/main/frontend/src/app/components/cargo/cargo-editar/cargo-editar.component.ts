import { Cargo } from './../../../model/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cargo-editar',
  templateUrl: './cargo-editar.component.html',
})
export class CargoEditarComponent implements OnInit {
  cargo!: Cargo;

  nome!: string;

  constructor(
    private cargoService: CargoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargoService
      .getCargoPorId(this.route.snapshot.params.id)
      .subscribe((cargo) => {
        this.cargo = cargo;
      });
  }

  onSubmit(): void {
    this.cargoService.atualizar(this.cargo).subscribe(() => {
      this.router.navigate(["/","listarCargos"]);
    });
  }
}
