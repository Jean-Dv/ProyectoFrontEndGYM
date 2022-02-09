import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-editar-Estudiantes',
  templateUrl: './editar-Estudiantes.component.html',
  styleUrls: ['./editar-Estudiantes.component.css']
})
export class EditarEstudiantesComponent implements OnInit {

  id: number | null;
  estudianteForm: FormGroup;

  constructor(private _router: Router,
              private router: ActivatedRoute,
              private _estudianteService: EstudianteService,
              private _fb: FormBuilder) {
    this.estudianteForm = this._fb.group({
      documento: ['', Validators.required],
      nombre: ['', Validators.required],
    });
    this.id = this.router.snapshot.params['id'];
  }


  ngOnInit(): void {
    if(this.id !== null){
      this._estudianteService.findEstudiante(this.id).subscribe(
        data => {
          console.log(data);
          this.estudianteForm.setValue({
            documento: data.estudiante.documento,
            nombre: data.estudiante.nombre,

          })
        }
      );
    }
  }

  updateEstudiante(){
    this._estudianteService.updateEstudiante(this.id, this.estudianteForm.value).subscribe(res => {
      this._router.navigate(["/listar-estudiantes"]);
    });
  }

}
