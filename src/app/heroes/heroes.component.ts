import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:Hero;
  heroes:Hero[];

  constructor(private heroService:HeroService, private messageService:MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  selectHero(hero: Hero){
    this.messageService.add(`HeroesComponent: Selected hero ${hero.name}`);
    this.selectedHero = hero;
  }

  getHeroes(){
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
