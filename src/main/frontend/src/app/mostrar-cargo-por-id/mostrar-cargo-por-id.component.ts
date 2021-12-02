import { CargoService } from './../services/cargo.service';
import { ICargo } from '../model/cargo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-cargo-por-id',
  templateUrl: './mostrar-cargo-por-id.component.html',
})
export class MostrarCargoPorIdComponent implements OnInit {
  cargo = {} as ICargo;

  constructor(
    private cargoService: CargoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.cargo = this.getCargoPorId();
  }
  // getCargoPorId(): Observable<Cargo> {
  //   const id: string | null = this.route.snapshot.paramMap.get('id');
  //   return this.cargoService.getCargoPorId(parseInt(id));
  // }
}
