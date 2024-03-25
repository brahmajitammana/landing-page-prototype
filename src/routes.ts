import {Routes} from '@angular/router';

import { LandingPageComponent } from './app/landing-page/landing-page.component';
import { HomeComponent } from './app/home/home.component';
export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: '/home', component: HomeComponent},
];