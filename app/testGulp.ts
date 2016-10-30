import { Component, Input} from '@angular/core';
import { Hero } from './hero.model';
@Component({
    selector: 'hero-detail',
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

export class HeroDetailComponent {
    @Input() hero: Hero;
}
