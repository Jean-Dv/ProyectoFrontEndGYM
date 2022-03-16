import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/Estudiante';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-estudiantes',
  templateUrl: './crear-estudiantes.component.html',
  styleUrls: ['./crear-estudiantes.component.css']
})
export class CrearEstudiantesComponent implements OnInit {

  titulo: string;
  estudianteForm : FormGroup;

  constructor(private _router: Router,
    private _estudianteService: EstudianteService,
    private fb: FormBuilder) {

      this.estudianteForm = this.fb.group({
        documento: ['', Validators.required],
        nombre: ['', Validators.required],
      });
    this.titulo = "Crear Estudiante";
  }
  ngOnInit(): void {
  }
  addEstudiante() : void {
    const estudiante : Estudiante = {
      documento: this.estudianteForm.get('documento')?.value,
      nombre: this.estudianteForm.get('nombre')?.value
    };
    console.log(estudiante);
    this._estudianteService.addEstudiante(estudiante).subscribe(data => {
      console.log(data);
      window.location.reload();
    })

  }
}
