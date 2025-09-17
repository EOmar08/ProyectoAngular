import { Rol } from "./Rol";
export class Usuario {
  IdUsuario!: number;
  Nombre!: string;
  ApellidoPaterno!: string;
  ApellidoMaterno!: string;
  Telefono!: string;
  CURP!: string;
  Rol!: Rol;
}
