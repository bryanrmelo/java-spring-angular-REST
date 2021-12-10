import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './components/cliente';
import { CargoComponent } from './components/cargo';
import { HomeComponent } from './components/home';
import { FuncionarioComponent } from './components/funcionario';
import { CargoDetalhesComponent } from './components/cargo/cargo-detalhes/cargo-detalhes.component';
import { CargoEditarComponent } from './components/cargo/cargo-editar/cargo-editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listarCargos', component: CargoComponent },
  { path: 'listarCargos/detalhes/:id', component: CargoDetalhesComponent },
  { path: 'listarCargos/editar/:id', component: CargoEditarComponent },
  { path: 'listarClientes', component: ClienteComponent },
  { path: 'listarFuncionarios', component: FuncionarioComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



