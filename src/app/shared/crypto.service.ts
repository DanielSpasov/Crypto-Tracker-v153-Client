import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CryptoService {

    constructor(private http: HttpClient) { }

    getCryptos(limit: number) { return this.http.get<any>(`https://api.lunarcrush.com/v2?data=market&key=&limit=${limit}&sort=acr`) }
    getTop100Cryptos() { return this.http.get<any>(`http://localhost:4153/crypto/getOne`) }

}
