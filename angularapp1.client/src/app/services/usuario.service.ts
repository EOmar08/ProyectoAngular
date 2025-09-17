import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Result } from '../../Models/Result'
import { Usuario } from '../../Models/Usuario'
import { Rol } from '../../Models/Rol'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private configUrl: string = "http://localhost:5178/api/Usuario";
  constructor(private httpClient: HttpClient) { }

  //Getall(): Observable<Result> {
  //  const GetAll = this.httpClient.get<Result>(this.configUrl);
  //  return GetAll;
  //}


  Getall(): Observable<Usuario[]> {
    var Getall2 = this.httpClient.get<Result>(this.configUrl).pipe(
      map((respuesta: Result) => {

        const usuarios: Usuario[] = respuesta.objects.map((user: any) => {

          const usuarioObj = new Usuario();
          usuarioObj.IdUsuario = user.idUsuario;
          usuarioObj.Nombre = user.nombre;
          usuarioObj.ApellidoPaterno = user.apellidoPaterno;
          usuarioObj.ApellidoMaterno = user.apellidoMaterno;
          usuarioObj.Telefono = user.telefono;
          usuarioObj.CURP = user.curp;

          usuarioObj.Rol = new Rol();
          usuarioObj.Rol.IdRol = user.rol.idRol;
          usuarioObj.Rol.Nombre = user.rol.nombre;

          return usuarioObj;
        });

        return usuarios;
         
      }));

    return Getall2;
  }

  Getall2(): Observable<Result> {
    const Getall2 = this.httpClient.get<Result>(this.configUrl).pipe(
      map((respuesta: Result) => {
        return respuesta;
      })
    );

    return Getall2;
  }


  // Obtener la lista de mascotas
  //getMascotas(): Observable<Mascota[]> {
  //  return this.http.get<Mascota[]>(this.apiUrl).pipe(
  //    map(data => data), // Transforma los datos si es necesario
  //    catchError(this.handleError) // Manejo de errores
  //  );
  //}


}
