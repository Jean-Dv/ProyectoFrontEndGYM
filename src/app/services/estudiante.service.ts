import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  url : string = 'http://localhost:8000/api/estudiante/';

  constructor(private http: HttpClient) { }

  getEstudiantes () : Observable<any> {
    return this.http.get(this.url);
  }

  addEstudiante(estudiante: Estudiante) : Observable<any> {
    return this.http.post(this.url, estudiante);
  }

  deleteEstudiante(id: any) : Observable<any> {
    return this.http.delete(this.url+id);
  }

}
