import { Component } from '@angular/core';
import { Materia } from "../../../Models/Materia";
import { Semestre } from "../../../Models/Semestre";


@Component({
  selector: 'app-materia-get-all',
  standalone: false,
  templateUrl: './materia-get-all.component.html',
  styleUrl: './materia-get-all.component.css'
})
export class MateriaGetAllComponent {

  materiaObj = new Materia(1, 'Matematicas', 20, new Semestre(1, 'PrimerSemestre'));

  MostrarObjeto(): void {
    console.log(this.materiaObj);
  }

}
