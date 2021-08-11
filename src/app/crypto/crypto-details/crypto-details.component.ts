import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICrypto } from 'src/app/interfaces/crypto.model';
import { IUser } from 'src/app/interfaces/user.model';

import { CryptoService } from '../crypto.service';
import { UserService } from '../../user/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-crypto-details',
    templateUrl: './crypto-details.component.html',
    styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

    user!: IUser;

    currentCurrencySymbol!: string;
    crypto!: ICrypto;

    top_5_by_price!: ICrypto[];
    top_5_by_24h!: ICrypto[];
    top_5_by_7d!: ICrypto[];

    tags!: boolean;
    calcIsOpen!: boolean;

    constructor(
        private router: Router,
        private cryptoService: CryptoService,
        private userService: UserService,
        private toastr: ToastrService
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
    };

    ngOnInit(): void {
        let currentUrlArray = this.router.url.split('/');
        this.currentCurrencySymbol = currentUrlArray[currentUrlArray.length - 1];

        this.cryptoService
            .getOne(this.currentCurrencySymbol)
            .subscribe(
                data => this.crypto = data[this.currentCurrencySymbol],
                err => this.toastr.error(err.error.message)
            );

        this.cryptoService
            .getLatest()
            .subscribe(
                data => {
                    this.top_5_by_price = this.cryptoService.sortItems(data, false, 'price').slice(0, 5)
                    this.top_5_by_24h = this.cryptoService.sortItems(data, false, 'percent_change_24h').slice(0, 5)
                    this.top_5_by_7d = this.cryptoService.sortItems(data, false, 'percent_change_7d').slice(0, 5)
                },
                err => this.toastr.error(err.error.message)
            );

        this.tags = false;
        this.calcIsOpen = false;

        const userID = localStorage.getItem('user-id');
        if (!userID) return;

        this.userService
            .getUser(userID)
            .subscribe(
                data => this.user = data,
                err => this.toastr.error(err.error.message)
            );
    };

    switchTags(): void { this.tags = !this.tags; };
    toggleCalc(): void { this.calcIsOpen = !this.calcIsOpen; };

    editWatchlist(crypto: string) {
        this.cryptoService
            .editWatchlist(crypto)
            .subscribe(
                data => this.user = data,
                err => this.toastr.error(err.error.message)
            );
    };

    editWatchlistAsGuest() { this.toastr.error('Sign In to add items to watchlist'); };
}
