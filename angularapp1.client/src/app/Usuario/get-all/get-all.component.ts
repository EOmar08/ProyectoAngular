import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { Result } from '../../../Models/Result'
import { Usuario } from '../../../Models/Usuario'

@Component({
  selector: 'app-get-all',
  standalone: false,
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit {

  usuarios: Array<Usuario> = []

  ngOnInit() {
    this.GetAll();
  }

  constructor(private usuarioService: UsuarioService) { }

  //GetAll() {
  //  this.usuarioService.Getall().subscribe((data: Result) => {
  //    console.log(data)
  //    this.usuarios = data.objects as Usuario[];
      
  //  });
  //}


  GetAll() {
    this.usuarioService.Getall().subscribe((data: Usuario[]) => {
      console.log(data)
      this.usuarios = data;
    });
  }

}
