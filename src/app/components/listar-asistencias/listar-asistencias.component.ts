import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AsistenciaService } from '../../services/asistencia.service';
import { Asistencia } from '../../models/Asistencia';
//import { ContadorComponent} from "../contador/contador.component";

@Component({
  selector: 'app-listar-asistencias',
  templateUrl: './listar-asistencias.component.html',
  styleUrls: ['./listar-asistencias.component.css']
})

export class ListarAsistenciasComponent implements OnInit {

  listaAsistencias : Asistencia[] = [];

  constructor(private _router: Router,
              private _asistenciaService: AsistenciaService) { }

  ngOnInit(): void {
    this.getAsistencias();
  }

  getAsistencias(): void {
    this._asistenciaService.getAsistencias().subscribe(data => {
      console.log(data);
      this.listaAsistencias = data.asistencias;
    });
  }

  deleteAsistencia(id: any): void {
    this._asistenciaService.deleteAsistencia(id).subscribe(data => {
      this.listaAsistencias = this.listaAsistencias.filter(item => item.id !== id);
      console.log(data);
    })
  }

}
