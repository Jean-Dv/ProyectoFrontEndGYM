export class Asistencia {
  id?: number;
  documento: String;
  fecha: Date;


  constructor(documento: string, fecha: Date) {
    this.documento = documento;
    this.fecha = fecha;
  }
}
