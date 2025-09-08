import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RandomUser {
  Nombre: string;
  Email: string;
  FechaNacimiento: string;
  Telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private configUrl!: string;

  constructor(private http: HttpClient) { }

  GetUser(): Observable<RandomUser> {
    //this.configUrl = `${environment.nasaUrl}/planetary/apod?api_key=${environment.nasaKey}`;
    this.configUrl = "https://randomuser.me/api/";
    const randomUserApi = this.http.get<any>(this.configUrl);
    //console.log(randomUserApi)
    return randomUserApi;
  }
}
