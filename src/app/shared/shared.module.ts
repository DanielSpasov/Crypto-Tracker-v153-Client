import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { CryptoService } from './crypto.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { SameValueDirective } from './same-value.directive';
import { IsEmailDirective } from './is-email.directive';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { CryptoCalculatorComponent } from './crypto-calculator/crypto-calculator.component';
import { TopFiveCryptosComponent } from './top-five-cryptos/top-five-cryptos.component';



@NgModule({
    declarations: [
        HomeComponent,
        NewsComponent,
        CryptoComponent,
        WatchlistComponent,
        SignInComponent,
        SignUpComponent,
        SignOutComponent,
        CryptoDetailsComponent,
        CryptoCalculatorComponent,
        TopFiveCryptosComponent,
        SameValueDirective,
        IsEmailDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        FormsModule
    ],
    exports: [
        HomeComponent,
        NewsComponent,
        CryptoComponent,
        WatchlistComponent,
        SignInComponent,
        SignUpComponent,
        SignOutComponent,
        CryptoDetailsComponent,
        CryptoCalculatorComponent,
        TopFiveCryptosComponent
    ],
    providers: [
        CryptoService,
        UserService,
        AuthService
    ]
})
export class SharedModule { }
