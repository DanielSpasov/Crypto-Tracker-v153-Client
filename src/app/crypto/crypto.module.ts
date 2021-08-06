import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';

import { CryptoRoutingModule } from './crypto-routing.module';

import { CryptoService } from './crypto.service';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';

import { CryptoComponent } from './crypto/crypto.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { TopFiveCryptosComponent } from './top-five-cryptos/top-five-cryptos.component';
import { CryptoCalculatorComponent } from './crypto-calculator/crypto-calculator.component';



@NgModule({
    declarations: [
        CryptoComponent,
        CryptoDetailsComponent,
        WatchlistComponent,
        TopFiveCryptosComponent,
        CryptoCalculatorComponent
    ],
    imports: [
        CoreModule,
        AuthModule,
        CommonModule,
        FormsModule,
        CryptoRoutingModule
    ],
    providers: [
        CryptoService,
        UserService,
        AuthService
    ]
})
export class CryptoModule { }
