import { Component, Input } from '@angular/core';
import { ICrypto } from 'src/app/interfaces/crypto.model';

@Component({
    selector: 'app-crypto-calculator',
    templateUrl: './crypto-calculator.component.html',
    styleUrls: ['./crypto-calculator.component.css']
})
export class CryptoCalculatorComponent {

    @Input() crypto!: ICrypto;

    value!: number;

}
