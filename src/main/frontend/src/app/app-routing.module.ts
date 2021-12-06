import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCargos } from './cargo/listaCargos.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listarCargos', component: ListaCargos},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
