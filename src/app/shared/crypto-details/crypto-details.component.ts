import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICrypto } from 'src/app/interfaces/crypto.model';

import { CryptoService } from '../crypto.service';



@Component({
    selector: 'app-crypto-details',
    templateUrl: './crypto-details.component.html',
    styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

    currentCurrencySymbol!: string;
    crypto!: ICrypto;

    top_5_by_price!: ICrypto[];
    top_5_by_24h!: ICrypto[];
    top_5_by_7d!: ICrypto[];

    tags!: boolean;
    calcIsOpen!: boolean;

    constructor(private router: Router, private cryptoService: CryptoService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => { return false }
    }

    ngOnInit(): void {
        let currentUrlArray = this.router.url.split('/');
        this.currentCurrencySymbol = currentUrlArray[currentUrlArray.length - 1];

        this.cryptoService
            .getOne(this.currentCurrencySymbol)
            .subscribe(data => this.crypto = data.data[this.currentCurrencySymbol]);

        this.cryptoService
            .getTop100()
            .subscribe(data => {
                this.top_5_by_price = this.cryptoService.sortItems(data.data, false, 'price').slice(0, 5)
                this.top_5_by_24h = this.cryptoService.sortItems(data.data, false, 'percent_change_24h').slice(0, 5)
                this.top_5_by_7d = this.cryptoService.sortItems(data.data, false, 'percent_change_7d').slice(0, 5)
            });

        this.tags = false;
        this.calcIsOpen = false;
    }

    switchTags(): void { this.tags = !this.tags }
    toggleCalc(): void { this.calcIsOpen = !this.calcIsOpen }

    addToWatchlist(crypto: string): void { this.cryptoService.addToWatchlist(crypto).subscribe(data => console.log(data)) }
    removeFromWatchlist(crypto: string): void { this.cryptoService.removeFromWatchlist(crypto).subscribe(data => console.log(data)) }

}
