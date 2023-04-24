import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Lifecycle hook that is called when the component is initialized. 
  ngOnInit(): void {
    // It calls the getHeroes() method to retrieve the list of heroes.
    this.getHeroes();
  }

  // Display information about the selected hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // Use the injected heroService to retrieve the list of heroes.
    this.heroService.getHeroes()
      // The subscribe() method is used to subscribe to the Observable returned by getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}