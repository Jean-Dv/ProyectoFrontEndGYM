import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {

  constructor(private http: HttpClient) { }
  uri='http://127.0.0.1:8000/api/excel'
  public getExcel(): Observable<Blob> {
    let uri = '/my/uri';
    return this.http.get(uri, { responseType: 'blob' });
  }
}
