import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../../Models/Result'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private configUrl: string = "http://localhost:5178/api/Usuario";
  constructor(private httpClient: HttpClient) { }

  Getall(): Observable<Result> {
    const GetAll = this.httpClient.get<Result>(this.configUrl);
    return GetAll;
  }


}
