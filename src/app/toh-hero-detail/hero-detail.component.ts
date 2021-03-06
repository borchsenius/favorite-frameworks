import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../toh-hero/hero.service';
import {Hero} from '../toh-hero/hero';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log("save " + this.hero.id + " " + this.hero.name);
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}
