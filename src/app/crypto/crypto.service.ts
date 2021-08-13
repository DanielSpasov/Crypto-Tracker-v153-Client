import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICrypto } from '../interfaces/crypto.model';
import { IUser } from '../interfaces/user.model';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;



@Injectable()
export class CryptoService {

    constructor(private http: HttpClient) { }

    getOne(crypto: string): Observable<ICrypto> { return this.http.get<ICrypto>(`${apiUrl}/crypto/getOne?crypto=${crypto}`) }

    getLatest(): Observable<ICrypto[]> { return this.http.get<ICrypto[]>(`${apiUrl}/crypto/getLatest`) }
    getWatchlist(userID: string | null) { return this.http.get<ICrypto[]>(`${apiUrl}/crypto/getWatchlist?userID=${userID}`) }

    searchLatest(cryptos: string) { return this.http.get<ICrypto[]>(`${apiUrl}/crypto/searchLatest?cryptos=${cryptos}`) }
    searchWatchlist(cryptos: string, userID: string | null) { return this.http.get<ICrypto[]>(`${apiUrl}/crypto/searchWatchlist?cryptos=${cryptos}&userID=${userID}`) }

    editWatchlist(crypto: string) {
        let userID = localStorage.getItem('user-id')
        return this.http.post<IUser>(`${apiUrl}/crypto/editWatchlist`, { crypto, userID, })
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
