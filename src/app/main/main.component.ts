import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { ICrypto } from '../interfaces/crypto.model';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
