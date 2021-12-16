import { Cargo } from './../../../model/cargo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo-detalhes',
  templateUrl: './cargo-detalhes.component.html',
})
export class CargoDetalhesComponent implements OnInit {

  cargo: Cargo;

  constructor(private cargoService: CargoService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getCargoPorId()
  }
  getCargoPorId() {
    this.cargoService.getCargoPorId(this.route.snapshot.params.id).subscribe(cargo => {
      this.cargo = cargo;
    })
  }

}
