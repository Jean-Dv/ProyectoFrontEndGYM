export class Estudiante {
    id?: number;
    documento: String;
    nombre: string;

    
    constructor(documento: string, nombre: string) {
        this.documento = documento;
        this.nombre = nombre;
    }
}