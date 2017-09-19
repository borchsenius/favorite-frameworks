import { Component, OnInit } from '@angular/core';
import {Hero} from "../toh-hero/hero";
import {HeroService} from "../toh-hero/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedHero.id]);
  }

  add(name: string): void {
    console.log("Adding Hero " + name);
    console.log("Adding Hero " + this.heroService);

    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        console.log("pushing Hero");
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    console.log("deleting " + hero.id + " " + hero.name);

    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
