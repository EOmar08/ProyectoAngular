import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
export interface RandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  }
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
    postcode: string;
    state: string;
  }
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}
//export interface Name {
//  title: string;
//  first: string;
//  last: string;
//}

//export interface Location {
//  city: string;
//  country: string;
//  postcode: string;
//  state: string;
//}

//export interface Picture {
//  large: string;
//  medium: string;
//  thumbnail: string;
//}

export interface Results {
  results: Array<RandomUser>;
}

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private configUrl: string = "https://randomuser.me/api/";

  constructor(private http: HttpClient) { }
  GetRandomUser(): Observable<Results> {
    const apod = this.http.get<Results>(this.configUrl);
    return apod;
  }
}
