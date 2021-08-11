import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CryptoService } from '../crypto.service';
import { UserService } from '../../user/user.service';
import { ToastrService } from 'ngx-toastr';

import { IUser } from 'src/app/interfaces/user.model';



@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.component.html',
    styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

    user!: IUser;

    watchlistCryptos!: any;
    sorting!: { [key: string]: boolean };

    constructor(
        private cryptoService: CryptoService,
        private userService: UserService,
        private toastr: ToastrService
    ) { };

    
    searchSubmit(form: NgForm) {
        if (!form.controls.crypto.value) {
            this.loadItems();

        } else {

            let userID = localStorage.getItem('user-id');
            if(!userID) return;

            this.cryptoService
                .searchWatchlist(form.controls.crypto.value, userID)
                .subscribe(
                    data => this.watchlistCryptos = data,
                    err => this.toastr.error(err.error.message)
                );
        };
    };

    ngOnInit(): void {

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
                data => {
                    this.user = data;
                    this.loadItems();
                },
                err => this.toastr.error(err.error.message)
            );
    };

    loadItems(): void {
        let userID = localStorage.getItem('user-id');
        this.cryptoService
            .getWatchlist(userID)
            .subscribe(
                data => this.watchlistCryptos = data,
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

    sortItems(criteria: string): void {
        this.cryptoService.sortItems(this.watchlistCryptos, this.sorting[criteria], criteria);
        this.sorting[criteria] = !this.sorting[criteria];
    };
}
