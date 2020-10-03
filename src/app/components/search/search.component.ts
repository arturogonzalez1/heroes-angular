import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService} from '../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  filter: string;
  constructor( private activatedRouter: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( params => {
      this.filter = params.filter;
      this.heroes = this._heroesService.getHeroes(this.filter);
    });
  }

}
