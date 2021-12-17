import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CargoComponent } from './components/cargo';
import { CargoCriarComponent } from './components/cargo/cargo-criar/cargo-criar.component';
import { CargoDetalhesComponent } from './components/cargo/cargo-detalhes/cargo-detalhes.component';
import { CargoEditarComponent } from './components/cargo/cargo-editar/cargo-editar.component';
import { ClienteComponent } from './components/cliente';
import { ClienteCriarComponent } from './components/cliente/cliente-criar/cliente-criar.component';
import { ClienteDetalhesComponent } from './components/cliente/cliente-detalhes/cliente-detalhes.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar/cliente-editar.component';
import { FuncionarioComponent } from './components/funcionario';
import { HomeComponent } from './components/home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cargos', component: CargoComponent },
  { path: 'cargos/novo', component: CargoCriarComponent },
  { path: 'cargos/editar/:id', component: CargoEditarComponent },
  { path: 'cargos/detalhes/:id', component: CargoDetalhesComponent },

  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/novo', component: ClienteCriarComponent },
  { path: 'clientes/editar/:id', component: ClienteEditarComponent },
  { path: 'clientes/detalhes/:id', component: ClienteDetalhesComponent },

  { path: 'funcionarios', component: FuncionarioComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
