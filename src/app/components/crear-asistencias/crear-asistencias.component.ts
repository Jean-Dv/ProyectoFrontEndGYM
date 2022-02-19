import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from '../../services/asistencia.service';
import { Asistencia } from '../../models/Asistencia';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-asistencias',
  templateUrl: './crear-asistencias.component.html',
  styleUrls: ['./crear-asistencias.component.css']
})
export class CrearAsistenciasComponent implements OnInit {

  titulo: string;
  asistenciaForm : FormGroup;

  constructor(private _router: Router,
              private _asistenciaService: AsistenciaService,
              private fb: FormBuilder) {

    this.asistenciaForm = this.fb.group({
      documento: ['', Validators.required],
      fecha: ['', Validators.required],
    });
    this.titulo = "Crear Asistencia";
  }
  ngOnInit(): void {
  }
  addAsistencia() : void {
    const asistencia : Asistencia = {
      documento: this.asistenciaForm.get('documento')?.value,
      fecha: this.asistenciaForm.get('fecha')?.value
    };
    console.log(asistencia);
    this._asistenciaService.addAsistencia(asistencia).subscribe(data => {
      console.log(data);
      this._router.navigate(['/listar-asistencias']);
    })
  }
}

