import { Component, OnInit } from '@angular/core';
import { RandomUserService, RandomUser, Results} from '../../services/random-user.service'

@Component({
  selector: 'app-random-user',
  standalone: false,
  templateUrl: './random-user.component.html',
  styleUrl: './random-user.component.css'
})
export class RandomUserComponent implements OnInit {
  randomUser!: RandomUser;
  constructor(private RandomUserService: RandomUserService) { }

  ngOnInit() {
    this.getRandomUser();
  }

  getRandomUser() {
    this.RandomUserService.GetRandomUser().subscribe((data: Results) => {
      this.randomUser = data.results[0];
    });
  }
}
