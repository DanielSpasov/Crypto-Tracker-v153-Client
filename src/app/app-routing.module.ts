import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: MainComponent
    },
    {
        path: 'news',
        component: MainComponent
    },
    {
        path: 'crypto',
        component: MainComponent
    },
    {
        path: 'watchlist',
        component: MainComponent
    },
    {
        path: 'login',
        component: MainComponent
    },
    {
        path: 'register',
        component: MainComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);