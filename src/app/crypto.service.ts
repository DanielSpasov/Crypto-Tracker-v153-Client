import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = "nl8ohwa7s3rzrg2a4dn9f"



@Injectable()
export class CryptoService {

    constructor(private http: HttpClient) { }

    // getCryptos(limit: number) { return this.http.get<any>(`https://api.lunarcrush.com/v2?data=exchanges&key=${apiKey}&limit=${limit}`) }
    getCryptos(limit: number) { return this.http.get<any>(`https://api.lunarcrush.com/v2?data=market&key=${apiKey}&limit=${limit}&sort=acr`) }
    getCrypto(name: string) { return this.http.get<any>(`https://api.lunarcrush.com/v2?data=assets&key=${apiKey}&symbol=${name}`) }

}
