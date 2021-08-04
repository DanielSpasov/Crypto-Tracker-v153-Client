import { Component, OnInit } from '@angular/core';

import { CryptoService } from '../crypto.service';

import { IUser } from 'src/app/interfaces/user.model';
import { UserService } from '../user.service';



@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.component.html',
    styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

    watchlistCryptos!: any;
    sorting!: { [key: string]: boolean };

    user!: IUser;

    constructor(
        private cryptoService: CryptoService,
        private userService: UserService
    ) { }

    ngOnInit(): void {

        this.loadItems()

        this.userService
            .getUser()
            .subscribe(data => this.user = data)

        this.sorting = {
            cmc_rank: false,
            name: false,
            price: false,
            percent_change_24h: false,
            percent_change_7d: false,
            market_cap: false,
        }
    }

    loadItems(): void {
        let userID = localStorage.getItem('user-id')
        this.cryptoService
            .getWatchlistCryptos(userID)
            .subscribe(res => this.watchlistCryptos = res)
    }

    editWatchlist(crypto: string) {
        this.cryptoService
            .editWatchlist(crypto)
            .subscribe(
                data => this.user = data,
                err => console.log(err)
            )
    }

    sortItems(criteria: string): void {
        this.cryptoService.sortItems(this.watchlistCryptos, this.sorting[criteria], criteria)
        this.sorting[criteria] = !this.sorting[criteria]
    }
}
