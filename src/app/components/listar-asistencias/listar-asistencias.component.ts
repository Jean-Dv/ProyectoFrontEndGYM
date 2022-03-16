import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AsistenciaService } from '../../services/asistencia.service';
import { Asistencia } from '../../models/Asistencia';
import Swal from "sweetalert2";
import {style} from "@angular/animations";
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
    Swal.fire({
      icon: 'info',
      color: '#ffffffff',
      background: '#a8ae0e',
      title: 'Para eliminar una asistencia por favor digite la contraseña de administrador',
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
            title: 'seguro que quieres eliminar esta asistencia?',
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
              this._asistenciaService.deleteAsistencia(id).subscribe(data => {
                this.listaAsistencias = this.listaAsistencias.filter(item => item.id !== id);
                console.log(data);
              })
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
