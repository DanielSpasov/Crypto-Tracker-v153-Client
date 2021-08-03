import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { NewsComponent } from './shared/news/news.component';
import { CryptoComponent } from './shared/crypto/crypto.component';
import { WatchlistComponent } from './shared/watchlist/watchlist.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { SignOutComponent } from './shared/sign-out/sign-out.component';
import { InvalidPageComponent } from './core/invalid-page/invalid-page.component';
import { CryptoDetailsComponent } from './shared/crypto-details/crypto-details.component';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    { path: 'home', component: HomeComponent },
    {
        path: 'user',
        children: [
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'sign-out', component: SignOutComponent }
        ]
    },
    { path: 'cryptocurrencies', component: CryptoComponent, },
    { path: 'cryptocurrencies/:crypto', component: CryptoDetailsComponent },
    { path: 'news', component: NewsComponent },
    { path: 'watchlist', component: WatchlistComponent },
    { path: '**', component: InvalidPageComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);