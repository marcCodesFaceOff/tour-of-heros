import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

// The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
// Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. 
// The constructor shouldn't do anything.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
// Components shouldn't fetch or save data directly. 
// They should focus on presenting data and delegate data access to a service.
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // Create a method to retrieve the heroes from the service.
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}