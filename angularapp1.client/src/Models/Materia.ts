import { Semestre } from "../Models/Semestre";
export class Materia {
  IdMateria: number;
  nombre: string;
  costo: number;
  Semestre: Semestre;

  constructor(IdMateria: number, nombre: string, costo: number, Semestre: Semestre) {
    this.IdMateria = IdMateria;
    this.nombre = nombre;
    this.costo = costo;
    this.Semestre = Semestre;
  }
}
