import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/Estudiante';
//import { ContadorComponent} from "../contador/contador.component";

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})

export class ListarEstudiantesComponent implements OnInit {

  listaEstudiantes : Estudiante[] = [];

  constructor(private _router: Router,
              private _estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this._estudianteService.getEstudiantes().subscribe(data => {
      console.log(data);
      this.listaEstudiantes = data.estudiantes;
    });
  }

  deleteEstudiante(id: any): void {
    this._estudianteService.deleteEstudiante(id).subscribe(data => {
      this.listaEstudiantes = this.listaEstudiantes.filter(item => item.id !== id);
      console.log(data);
    })
  }

}
