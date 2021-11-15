import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEstudiantesComponent } from './components/listar-estudiantes/listar-estudiantes.component';
import { CrearEstudiantesComponent } from './components/crear-estudiantes/crear-estudiantes.component';
import { EditarEstudiantesComponent } from './components/editar-estudiantes/editar-estudiantes.component';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEstudiantesComponent,
    CrearEstudiantesComponent,
    EditarEstudiantesComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
