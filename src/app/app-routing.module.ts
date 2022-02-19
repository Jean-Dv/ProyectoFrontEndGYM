import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstudiantesComponent } from './components/crear-estudiantes/crear-estudiantes.component';
import { ListarEstudiantesComponent } from './components/listar-estudiantes/listar-estudiantes.component';
import { CrearAsistenciasComponent } from './components/crear-asistencias/crear-asistencias.component';
import { ListarAsistenciasComponent } from './components/listar-asistencias/listar-asistencias.component';

const routes: Routes = [
  { path: '', component: ListarEstudiantesComponent},
  { path: 'crear-estudiantes', component: CrearEstudiantesComponent},
  { path: 'crear-asistencias', component: CrearAsistenciasComponent},
  { path: 'listar-asistencias', component: ListarAsistenciasComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
