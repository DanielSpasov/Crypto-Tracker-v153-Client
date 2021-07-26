import { Component, Input } from '@angular/core';
import { ICrypto } from 'src/app/interfaces/crypto.model';

@Component({
  selector: 'app-top-five-cryptos',
  templateUrl: './top-five-cryptos.component.html',
  styleUrls: ['./top-five-cryptos.component.css']
})
export class TopFiveCryptosComponent {

  @Input() cryptos!: ICrypto[];
  @Input() title!: string;

}
