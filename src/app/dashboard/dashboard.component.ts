import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService, private userService: UserService) { }

  heroes: Hero[];
  users: User[];

  ngOnInit() {
    this.getHeroes();
    this.getUsers();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);

      
  }

}
