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
            const resultado = response.resultado;
            if (!resultado) {
              return {available: true};
            }else{
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
