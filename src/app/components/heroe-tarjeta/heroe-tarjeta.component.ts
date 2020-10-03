import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() hero: Heroe;
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  showHero(): void {
    this.router.navigate(['/hero', this.hero.id]);
  }
}
