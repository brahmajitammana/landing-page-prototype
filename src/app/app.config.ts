import {ApplicationConfig} from '@angular/core';
import {provideProtractorTestingSupport} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';

import {routes} from '../routes';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideProtractorTestingSupport()]
};