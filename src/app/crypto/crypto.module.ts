import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { CryptoRoutingModule } from './crypto-routing.module';

import { CryptoService } from './crypto.service';

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
        CommonModule,
        FormsModule,
        CryptoRoutingModule
    ],
    providers: [
        CryptoService
    ]
})
export class CryptoModule { }
