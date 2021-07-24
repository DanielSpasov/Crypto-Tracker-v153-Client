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

    constructor(public cryptoService: CryptoService) { }

    loadItems(): void { this.cryptoService.getTop100Cryptos().subscribe(res => this.cryptos = res.data) }
    reloadItems(): void { this.cryptos = []; this.loadItems() }
    ngOnInit(): void { this.loadItems() }

    addToWatchlist(crypto: string): void { this.cryptoService.addToWatchlist(crypto).subscribe(data => console.log(data)) }
    removeFromWatchlist(crypto: string): void { this.cryptoService.removeFromWatchlist(crypto).subscribe(data => console.log(data)) }

}
