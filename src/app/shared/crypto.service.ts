import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICrypto } from '../interfaces/crypto.model';
import { IUser } from '../interfaces/user.model';



@Injectable()
export class CryptoService {

    constructor(private http: HttpClient) { }

    getOne(crypto: string) { return this.http.get<any>(`http://localhost:4153/crypto/getOne?crypto=${crypto}`) }
    getTop100() { return this.http.get<any>('http://localhost:4153/crypto/getTop100') }
    getWatchlistCryptos(userID: string | null) { return this.http.get<any>(`http://localhost:4153/crypto/getWatchlistCryptos?userID=${userID}`) }
    getCryptos(cryptos: string) { return this.http.get<any>(`http://localhost:4153/crypto/getCryptos?cryptos=${cryptos}`) }

    editWatchlist(crypto: string) {
        let userID = localStorage.getItem('user-id')
        return this.http.post<IUser>(`http://localhost:4153/crypto/editWatchlist`, { crypto, userID, })
    };

    sortItems(arr: ICrypto[], bool: boolean, criteria: string): ICrypto[] {
        if (criteria === 'name') {
            if (bool) arr.sort((a, b) => b.name.localeCompare(a.name));
            if (!bool) arr.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === 'cmc_rank') {
            if (bool) arr.sort((a, b) => b.cmc_rank - a.cmc_rank);
            if (!bool) arr.sort((a, b) => a.cmc_rank - b.cmc_rank);
        } else {
            if (bool) arr.sort((a, b) => a.quote.USD[criteria] - b.quote.USD[criteria]);
            if (!bool) arr.sort((a, b) => b.quote.USD[criteria] - a.quote.USD[criteria]);
        }
        return arr
    };
}
