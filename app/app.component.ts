import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>

    <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div>
            <label>id: </label>{{selectedHero.id}}
        </div>
        <div>
            <label for="hero-name">name: </label>
            <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
    </div>
    `
})
export class AppComponent {
    constructor(){
        // console.log(this.heroes);
    }
    title = 'Tour of Heroes';
    heroes = HEROES;    //NOTE: TypeScript can infer the type in this case

    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
