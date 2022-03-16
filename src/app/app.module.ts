import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//estudiante
import { ListarEstudiantesComponent } from './components/listar-estudiantes/listar-estudiantes.component';
import { CrearEstudiantesComponent } from './components/crear-estudiantes/crear-estudiantes.component';
//contador
import { ContadorComponent } from './components/contador/contador.component';
//asistecias
import { CrearAsistenciasComponent } from './components/crear-asistencias/crear-asistencias.component';
import { ListarAsistenciasComponent } from './components/listar-asistencias/listar-asistencias.component';
//admin
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarAsistenciaInicioComponent } from './components/listar-asistencia-inicio/listar-asistencia-inicio.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CrearEstudiantesComponent,
    CrearAsistenciasComponent,
    ListarEstudiantesComponent,
    ListarAsistenciasComponent,
    ListarAsistenciaInicioComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
