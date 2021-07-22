import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';
import { WatchlistComponent } from './watchlist/watchlist.component';



@NgModule({
    declarations: [
        HomeComponent,
        NewsComponent,
        CryptoComponent,
        WatchlistComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HomeComponent,
        NewsComponent,
        CryptoComponent,
        WatchlistComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class SharedModule { }
