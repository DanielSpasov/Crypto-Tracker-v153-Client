import { Component, OnInit } from '@angular/core';

import { CryptoService } from 'src/app/crypto.service';

import { ICrypto } from 'src/app/interfaces/crypto.model';



@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  cryptos!: ICrypto[];

    constructor(public cryptoService: CryptoService) { }

    ngOnInit(): void {
        this.cryptoService
            .getCryptos(10)
            .subscribe(data => {
                let names = []
                for (let i of data.data) { names.push(i.s) }
                this.cryptoService
                    .getCrypto(names.join(','))
                    .subscribe(data => { this.cryptos = data.data })
            })
    }

}