import { Component, OnInit } from '@angular/core';

import { CryptoService } from '../crypto.service';

import { ICrypto } from '../../interfaces/crypto.model';



@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

    cryptos!: ICrypto[];
    sorting!: { [key: string]: boolean };

    constructor(private cryptoService: CryptoService) { }

    loadItems(): void {
        this.cryptoService
            .getTop100()
            .subscribe(res => this.cryptos = res.data)
    }
    ngOnInit(): void {
        this.loadItems()
        this.sorting = {
            cmc_rank: false,
            name: false,
            price: false,
            percent_change_24h: false,
            percent_change_7d: false,
            market_cap: false,
        }
    }

    addToWatchlist(crypto: string): void { this.cryptoService.addToWatchlist(crypto).subscribe(data => console.log(data)) }
    removeFromWatchlist(crypto: string): void { this.cryptoService.removeFromWatchlist(crypto).subscribe(data => console.log(data)) }

    sortItems(criteria: string): void {
        if (criteria === 'name') {
            if (this.sorting[criteria]) this.cryptos.sort((a, b) => b.name.localeCompare(a.name));
            if (!this.sorting[criteria]) this.cryptos.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === 'cmc_rank') {
            if (this.sorting[criteria]) this.cryptos.sort((a, b) => b.cmc_rank - a.cmc_rank);
            if (!this.sorting[criteria]) this.cryptos.sort((a, b) => a.cmc_rank - b.cmc_rank);
        } else {
            if (this.sorting[criteria]) this.cryptos.sort((a, b) => a.quote.USD[criteria] - b.quote.USD[criteria]);
            if (!this.sorting[criteria]) this.cryptos.sort((a, b) => b.quote.USD[criteria] - a.quote.USD[criteria]);
        }
        this.sorting[criteria] = !this.sorting[criteria]
    }
}
