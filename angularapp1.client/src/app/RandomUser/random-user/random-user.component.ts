import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service'
import { RandomUser } from '../../services/random-user.service'

@Component({
  selector: 'app-random-user',
  standalone: false,
  templateUrl: './random-user.component.html',
  styleUrl: './random-user.component.css'
})
export class RandomUserComponent {
  usuario: any;
  constructor(private RandomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.RandomUserService.GetUser().subscribe(data => {
      console.log("Respuesta completa de la API:", data);
      this.usuario = data;
      console.log(this.usuario)
    });
  }

}
