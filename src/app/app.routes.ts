import { Routes } from '@angular/router';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';
import { WeahterCityComponent } from './Components/weahter-city/weahter-city.component';

export const routes: Routes = [
    { path: '', component: WeatherListComponent, pathMatch: 'full' },
    
    { path: 'weahterCity', component: WeahterCityComponent },

];
