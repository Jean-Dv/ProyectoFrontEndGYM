import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { EstudianteService } from '../services/estudiante.service';

export class MyValidators {
/**
 * valida la de manera asincrónica que el usuario exista
 * */
  static docCheck(service: EstudianteService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return service.findDocumento(value)
        .pipe(
          map((response: any) => {
            console.log(response)
            const resultado = response.body.resultado;
            if (resultado == true) {
              console.log('hola')
              return {available: true};
            }else{
              console.log('uwu')
              return {available: false}
            }
          })
        );
    };
  }

  static login(){
    var getin = prompt("ingresa contraseña")
    if (getin!="111")
    {location.href=''}
    else
    {alert('OK')}
  }

}
