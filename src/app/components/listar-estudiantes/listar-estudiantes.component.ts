import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/Estudiante';
import Swal from "sweetalert2";

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.component.html',
  styleUrls: ['./listar-estudiantes.component.css']
})

export class ListarEstudiantesComponent implements OnInit {
  titulo: string="Lista de Estudiantes";
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
    Swal.fire({
      icon: 'info',
      color: '#ffffffff',
      background: '#a8ae0e',
      title: 'por favor digite el password de administrador',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
          if (login!="iEXERCISEatUTS123"){
          Swal.fire({
            color: '#ffffffff',
            background: '#a8ae0e',
            icon: 'error',
            title: 'Oops...',
            text: 'No tienes permiso para hacer esto!',})
        }
        else{

            Swal.fire({
              color: '#ffffffff',
              background: '#a8ae0e',
              title: 'seguro que quieres eliminar este estudiante?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'si',
              denyButtonText: `no`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  icon: 'success',
                  title: 'eliminado satisfactoriamente!',
                  color: '#ffffffff',
                  background: '#a8ae0e'
                })
                this._estudianteService.deleteEstudiante(id).subscribe(data => {
                  this.listaEstudiantes = this.listaEstudiantes.filter(item => item.id !== id);
                  console.log(data);}
                )
              } else if (result.isDenied) {
                Swal.fire( {
                  icon: 'info',
                  title: 'No fue eliminado',
                  color: '#ffffffff',
                  background: '#a8ae0e',})
              }
            })


        }
      },
    })
  }


}
