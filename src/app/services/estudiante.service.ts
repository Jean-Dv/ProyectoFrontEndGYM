import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  url : string = 'http://localhost:8000/api/estudiante/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

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

  findDocumento(documento: any): Observable<any> {
    return this.http.get(`${this.url}validardocumento/${documento}`);
  }

  updateEstudiante(id: any, estudiante: Estudiante): Observable<any> {
    return this.http.put(this.url + id, estudiante, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any){
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMsg);
  }
}
