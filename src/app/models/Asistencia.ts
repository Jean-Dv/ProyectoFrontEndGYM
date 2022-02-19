export class Asistencia {
  id?: number;
  documento: String;
  fecha: string;


  constructor(documento: string, fecha: string) {
    this.documento = documento;
    this.fecha = fecha;
  }
}
