import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail', //Called from heroes-component
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label for="hero-name">name: </label>
                <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
}
