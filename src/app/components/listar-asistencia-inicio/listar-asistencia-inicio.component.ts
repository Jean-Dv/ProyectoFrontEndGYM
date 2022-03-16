import { Component, OnInit } from '@angular/core';
import {MyValidators} from '../../util/validation';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
@Component({
  selector: 'app-listar-asistencia-inicio',
  templateUrl: './listar-asistencia-inicio.component.html',
  styleUrls: ['./listar-asistencia-inicio.component.css']
})
export class ListarAsistenciaInicioComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {}
  /**
   * Te permite logearte para haceder al apartado de ADMIN
   * @password
   * */
  logear(){
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
        if (login!="iEXERCISEatUTS123")//pasword
        {this._router.navigate(['/']);
        Swal.fire({
          color: '#ffffffff',
          background: 'rgba(178,187,8,0.42)',
          icon: 'error',
          title: 'Oops...',
          text: 'No tienes permiso para hacer esto!',})
        }
        else
        {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            color: '#ffffffff',
            background: '#a8ae0e',
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this._router.navigate(['/admin']);
        }
      },
    })
  }
}
