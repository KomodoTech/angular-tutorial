import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes) //NOTE: forRoot will allow the app to be bootstraped with route info
    ],

    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],

    providers: [
        HeroService
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
