import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';

import { HeroService } from './hero.service';

@Component({
    selector: 'hero-app',
    template: `
        <h1>{{title}}</h1>

        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">

                <!-- * asterix before directive indicates that the element and all
                of its children constitute a "master template"-->
                <!--NOTE: [class.selected] is a property binding that sets current elements class to selected if the expression to its right evaluates to
                true-->
                <span class="badge"><span class="text">{{hero.id}}</span></span><span class="text">{{hero.name}}</span>
            </li>
        </ul>
        <hero-detail
        [hero]="selectedHero"
        ></hero-detail>
    `,

    providers: [HeroService]
})
export class AppComponent {
    constructor(private heroService: HeroService) {
        //NOTE: KEEP CONSTRUCTOR AS SIMPLE AS POSSIBLE. E.G. DON'T INIT
        // DATASET FROM HERE (instead use a lifecycle hook like OnInit).
        /*  heroService is a private property that will serve as the service
         *  injection site. Angular will supply an instance of HeroService when
         *  AppComponent is created (this is communicated through the
         *  PROVIDERS ARRAY PROPERTY above)
         */
    }
    title = 'Tour of Heroes';

    heroes: Hero[] = [];
    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    //NOTE: DO NOT CALL ON SERVICE CONSTRUCTOR TO GET DATA!
    /* doing something along these lines:
        heroSevice = new HeroService();
       would work for the current implementation of the service but if the service
       changes its constructor, or making it cache data instead creating a new array,
       or making the array different if in offline mode or testing, we would have a
       very hard time dealing with that without creating a hacky mess and needing to
       go through all of our code to find every time that we executed the service
       constructor!

    TLDR: INJECT SERVICE INSTEAD
    */
    // ANGULAR TAKES CARE OF CALLING THIS FUNCTION AT THE APPROPRIATE TIME
    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
