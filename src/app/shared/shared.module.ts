import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { CoreModule } from '../core/core.module';
import { CryptoService } from './crypto.service';
import { UserService } from './user.service';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';



@NgModule({
    declarations: [
        HomeComponent,
        NewsComponent,
        CryptoComponent,
        WatchlistComponent,
        LoginComponent,
        RegisterComponent,
        CryptoDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule
    ],
    exports: [
        HomeComponent,
        NewsComponent,
        CryptoComponent,
        WatchlistComponent,
        LoginComponent,
        RegisterComponent,
        CryptoDetailsComponent
    ],
    providers: [
        CryptoService,
        UserService
    ]
})
export class SharedModule { }
