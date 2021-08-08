import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { InvalidPageComponent } from './core/invalid-page/invalid-page.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    { path: 'home', component: HomeComponent },
    { path: '**', component: InvalidPageComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);