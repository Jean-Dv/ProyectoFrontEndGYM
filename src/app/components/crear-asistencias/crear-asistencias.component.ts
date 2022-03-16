import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from '../../services/asistencia.service';

import { EstudianteService } from '../../services/estudiante.service';
import { Asistencia } from '../../models/Asistencia';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MyValidators} from '../../util/validation';

@Component({
  selector: 'app-crear-asistencias',
  templateUrl: './crear-asistencias.component.html',
  styleUrls: ['./crear-asistencias.component.css'],
  providers: [DatePipe]
})

export class CrearAsistenciasComponent implements OnInit {
  asistenciaForm : FormGroup;
  titulo: string;

  constructor(private _router: Router,
              private _asistenciaService: AsistenciaService,
              private _estudianteSevice: EstudianteService,
              private fb: FormBuilder,
              public datepipe: DatePipe) {

    this.asistenciaForm = this.fb.group({
      documento: ['', Validators.required , MyValidators.docCheck(this._estudianteSevice)],
      fecha: ['', Validators.required],
    });

    this.titulo = "Crear Asistencia";

  }
  ngOnInit(){
  }
  /**
   * Obtiene el dato documento para luego ser validado por
   * @docCheck
   * */
  get DocumentoField() {
    return this.asistenciaForm.get('documento');
  }

  getformattedDate(){

    var date = new Date();
    var fecha = this.datepipe.transform(date, 'yyyy-MM-dd');
    return fecha;
  }

  date = new Date();
  /**
   * Manda Asistencia al api.
   * datos:
   *  @documento
   *  @fecha
   * */
  addAsistencia() : void {

    const asistencia : Asistencia = {

      documento: this.asistenciaForm.get('documento')?.value,
      fecha: this.date
    };
    console.log(asistencia);
    this._asistenciaService.addAsistencia(asistencia).subscribe(data => {
      console.log(data);
      window.location.reload();
    })
  }
}

