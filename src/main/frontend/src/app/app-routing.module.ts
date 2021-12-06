import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './components/cliente';
import { CargoComponent } from './components/cargo';
import { HomeComponent } from './components/home';
import { FuncionarioComponent } from './components/funcionario';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listarCargos', component: CargoComponent},
  { path: 'listarClientes', component: ClienteComponent},
  { path: 'listarFuncionarios', component: FuncionarioComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
