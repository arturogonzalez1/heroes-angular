import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService} from '../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  hero: Heroe;
  constructor( private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line:variable-name
               private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroesService.getHeroe(params.id);
    });
  }

  ngOnInit(): void {
  }

}
