import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstudiantesComponent } from './components/crear-estudiantes/crear-estudiantes.component';
import { EditarEstudiantesComponent } from './components/editar-estudiantes/editar-estudiantes.component';
import { ListarEstudiantesComponent } from './components/listar-estudiantes/listar-estudiantes.component';

const routes: Routes = [
  { path: '', component: ListarEstudiantesComponent},
  { path: 'crear-estudiantes', component: CrearEstudiantesComponent},
  { path: 'editar-estudiantes/:id', component: EditarEstudiantesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
