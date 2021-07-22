import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { NewsComponent } from './shared/news/news.component';
import { CryptoComponent } from './shared/crypto/crypto.component';
import { WatchlistComponent } from './shared/watchlist/watchlist.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { InvalidPageComponent } from './core/invalid-page/invalid-page.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'crypto',
        component: CryptoComponent
    },
    {
        path: 'watchlist',
        component: WatchlistComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: InvalidPageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);