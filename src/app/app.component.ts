import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import {RouterLink, Routes,
  RouterLinkActive, 
  RouterModule, RouterOutlet, provideRouter} from '@angular/router';
// import {routes} from './app.routing';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: '/home', component: HomeComponent},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    LandingPageComponent, 
    HomeComponent,
    RouterModule, 
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
