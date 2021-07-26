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
        this.cryptoService.sortItems(this.cryptos, this.sorting[criteria], criteria)
        this.sorting[criteria] = !this.sorting[criteria]
    }
}
