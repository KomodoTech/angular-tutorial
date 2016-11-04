import { Component } from '@angular/core';

//NOTE: Why does routing manually to /heroes not work but routerLink does?
@Component({
    selector: 'hero-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Tour of Heroes';
}
