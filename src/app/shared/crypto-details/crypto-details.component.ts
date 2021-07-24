import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICrypto } from 'src/app/interfaces/crypto.model';

import { CryptoService } from '../crypto.service';



@Component({
    selector: 'app-crypto-details',
    templateUrl: './crypto-details.component.html',
    styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

    currentCurrencySymbol!: string;
    crypto!: ICrypto;

    tags!: boolean;

    constructor(private router: Router, private cryptoService: CryptoService) { }

    ngOnInit(): void {
        let currentUrlArray = this.router.url.split('/');
        this.currentCurrencySymbol = currentUrlArray[currentUrlArray.length - 1];

        this.cryptoService
            .getOne(this.currentCurrencySymbol)
            .subscribe(data => this.crypto = data.data[this.currentCurrencySymbol]);

        this.tags = false;
    }

    switchTags(): void { this.tags = !this.tags }

}
