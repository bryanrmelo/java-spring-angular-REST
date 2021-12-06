import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './components/cliente';
import { CargoComponent } from './components/cargo';
import { HomeComponent } from './components/home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listarCargos', component: CargoComponent},
  { path: 'listarClientes', component: ClienteComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
