import { Rol } from "./Rol";
export class Usuario {
  idUsuario!: number;
  nombre!: string;
  apellidoPaterno!: string;
  apellidoMaterno!: string;
  telefono!: string;
  curp!: string;
  rol!: Rol;
}
