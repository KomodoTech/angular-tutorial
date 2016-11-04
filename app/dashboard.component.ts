import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    topHeroes: Hero[] = [];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.topHeroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        /* not implemented yet */
    }
}
