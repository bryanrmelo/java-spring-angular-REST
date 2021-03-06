import { RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { CargoComponent } from './components/cargo';
import { ClienteComponent } from './components/cliente';
import { FuncionarioComponent } from './components/funcionario';
import { CargoDetalhesComponent } from './components/cargo/cargo-detalhes/cargo-detalhes.component';
import { CargoEditarComponent } from './components/cargo/cargo-editar/cargo-editar.component';
import { FormsModule } from '@angular/forms';
import { CargoCriarComponent } from './components/cargo/cargo-criar/cargo-criar.component';
import { ClienteCriarComponent } from './components/cliente/cliente-criar/cliente-criar.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar/cliente-editar.component';
import { ClienteDetalhesComponent } from './components/cliente/cliente-detalhes/cliente-detalhes.component';


const ComponentesCargos = [
  CargoComponent,
  CargoDetalhesComponent,
  CargoEditarComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    FuncionarioComponent,
    ComponentesCargos,
    CargoCriarComponent,
    ClienteCriarComponent,
    ClienteEditarComponent,
    ClienteDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
