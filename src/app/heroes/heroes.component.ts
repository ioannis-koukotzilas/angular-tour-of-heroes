import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
HeroesComponent implements the OnInit lifecycle hook interface. 
The OnInit interface requires that the class has a method called 
ngOnInit() which will be automatically called by Angular when the
component is initialized.

The class also defines a property called heroes that is an array 
of Hero objects. In the constructor, the class injects an instance
of the HeroService into the heroService property using dependency 
injection.

In the ngOnInit() method, the getHeroes() method is called to populate
the heroes property with the heroes returned by the HeroService.

The getHeroes() method calls the getHeroes() method of the injected 
HeroService which returns an observable. The subscribe() method is 
used to subscribe to the observable and assign the returned heroes 
to the heroes property.

The class defines a component that uses a HeroService to fetch heroes, 
and populates the heroes property with the results. The OnInit interface 
ensures that the getHeroes() method is called when the component is 
initialized.
*/

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}