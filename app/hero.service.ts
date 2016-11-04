import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

//NOTE: The injectable decorator emits metadata about our service that
// angular may need to inject other dependencies into this service.
// At the moment we have no dependencies but this could change
@Injectable() export class HeroService {
    getHeroes(): Promise<Hero[]> {
        // Eventually HEROES will be replaced with a call to a server
        return Promise.resolve(HEROES);
    }

    // SIMULATE SLOW CONNECTION
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)) // delay
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}
