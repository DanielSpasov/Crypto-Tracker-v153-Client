import { Component, OnInit } from '@angular/core';

import { CryptoService } from '../crypto.service';
import { UserService } from '../../user/user.service';
import { ToastrService } from 'ngx-toastr';

import { ICrypto } from '../../interfaces/crypto.model';
import { IUser } from 'src/app/interfaces/user.model';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

    user: IUser | undefined;

    cryptos!: ICrypto[];
    sorting!: { [key: string]: boolean };

    constructor(
        private cryptoService: CryptoService,
        private userService: UserService,
        private toastr: ToastrService
    ) { };

    loadItems(): void {
        this.cryptoService
            .getLatest()
            .subscribe(
                data => this.cryptos = data,
                err => this.toastr.error(err.error.message)
            );
    };

    searchSubmit(form: NgForm) {
        if (!form.controls.crypto.value) {
            this.loadItems();

        } else {
            this.cryptoService
                .searchLatest(form.controls.crypto.value)
                .subscribe(
                    data => this.cryptos = data,
                    err => this.toastr.error(err.error.message)
                );
        };
    };

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

        const userID = localStorage.getItem('user-id');
        if (!userID) return;

        this.userService
            .getUser(userID)
            .subscribe(
                data => this.user = data,
                err => this.toastr.error(err.error.message)
            );
    };

    editWatchlist(crypto: string) {
        this.cryptoService
            .editWatchlist(crypto)
            .subscribe(
                data => this.user = data,
                err => this.toastr.error(err.error.message)
            );
    };

    editWatchlistAsGuest() { console.log('Sign in to add items to your watchlsit'); };

    sortItems(criteria: string): void {
        this.cryptoService.sortItems(this.cryptos, this.sorting[criteria], criteria);
        this.sorting[criteria] = !this.sorting[criteria];
    };
}
