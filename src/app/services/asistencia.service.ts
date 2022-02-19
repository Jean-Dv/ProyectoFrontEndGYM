import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Asistencia } from '../models/Asistencia';

@Injectable({
  providedIn: 'root'
})

export class AsistenciaService {

  url : string = 'http://localhost:8000/api/asistencia/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAsistencias() : Observable<any> {
    return this.http.get(this.url);
  }

  addAsistencia(asistencia: Asistencia) : Observable<any> {
    return this.http.post(this.url, asistencia);
  }

  deleteAsistencia(id: any) : Observable<any> {
    return this.http.delete(this.url+id);
  }

  findAsistencia(id: any): Observable<any> {
    return this.http.get(this.url+id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateAsistencia(id: any, asistencia: Asistencia): Observable<any> {
    return this.http.put(this.url + id, asistencia, this.httpOptions)
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
