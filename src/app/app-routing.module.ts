import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAsistenciasComponent } from './components/crear-asistencias/crear-asistencias.component';
import { ListarAsistenciasComponent } from './components/listar-asistencias/listar-asistencias.component';
import { ListarAsistenciaInicioComponent} from "./components/listar-asistencia-inicio/listar-asistencia-inicio.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: '', component: ListarAsistenciaInicioComponent},
  { path: 'crear-asistencias', component: CrearAsistenciasComponent},
  { path: 'listar-asistencias', component: ListarAsistenciasComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
