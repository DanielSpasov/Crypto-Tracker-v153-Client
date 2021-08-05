import { Component, OnInit } from '@angular/core';

import { CryptoService } from '../crypto.service';
import { UserService } from '../user.service';

import { ICrypto } from '../../interfaces/crypto.model';
import { IUser } from 'src/app/interfaces/user.model';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

    cryptos!: ICrypto[];
    sorting!: { [key: string]: boolean };
    searchError!: string;

    user: IUser | undefined;

    constructor(
        private cryptoService: CryptoService,
        private userService: UserService
    ) { };

    loadItems(): void {
        this.cryptoService
            .getTop100()
            .subscribe(data => this.cryptos = data);
    };

    searchSubmit(form: NgForm) {
        if (!form.controls.crypto.value) {
            this.loadItems()
            this.searchError = '';
        } else {
            this.cryptoService
                .getCryptos(form.controls.crypto.value)
                .subscribe(
                    data => {
                        this.cryptos = data;
                        this.searchError = '';
                    },
                    err => this.searchError = err.error.message
                )
        }
    }

    ngOnInit(): void {

        this.loadItems();

        this.sorting = {
            cmc_rank: false,
            name: false,
            price: false,
            percent_change_24h: false,
            percent_change_7d: false,
            market_cap: false,
        };

        let userID = localStorage.getItem('user-id');
        if (!userID) return;
        this.userService
            .getUser()
            .subscribe(
                data => this.user = data,
                err => console.log(err.error.message)
            );
    };

    editWatchlist(crypto: string) {
        this.cryptoService
            .editWatchlist(crypto)
            .subscribe(
                data => this.user = data,
                err => console.log(err.error.message)
            );
    };

    editWatchlistAsGuest() { console.log('Sign in to add items to your watchlsit'); };

    sortItems(criteria: string): void {
        this.cryptoService.sortItems(this.cryptos, this.sorting[criteria], criteria);
        this.sorting[criteria] = !this.sorting[criteria];
    };
}
