import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { CargoComponent } from './components/cargo';
import { ClienteComponent } from './components/cliente';
import { FuncionarioComponent } from './components/funcionario';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CargoComponent,
    ClienteComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
