import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CryptoService {

    constructor(private http: HttpClient) { }

    getTop100Cryptos() { return this.http.get<any>(`http://localhost:4153/crypto/getOne`) }

}
