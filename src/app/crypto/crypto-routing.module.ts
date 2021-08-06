import { RouterModule, Routes } from '@angular/router';

import { CryptoComponent } from './crypto/crypto.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

import { AuthGuard } from '../auth/auth.guard';



const routes: Routes = [
    {
        path: 'cryptocurrencies',
        component: CryptoComponent
    },
    {
        path: 'cryptocurrencies/:crypto',
        component: CryptoDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'watchlist',
        component: WatchlistComponent,
        canActivate: [AuthGuard]
    },
];

export const CryptoRoutingModule = RouterModule.forChild(routes);