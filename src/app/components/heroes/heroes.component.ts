import {Component, Input, OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  // tslint:disable-next-line:variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router ) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
}
