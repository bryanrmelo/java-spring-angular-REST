import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/model/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-criar',
  templateUrl: './cargo-criar.component.html',
})
export class CargoCriarComponent implements OnInit {
  cargo: Cargo = new Cargo();

  constructor(private cargoService: CargoService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.cargoService.criarCargo(this.cargo).subscribe(() => {
      this.router.navigate(["cargos/"]);
    });
  }
}
