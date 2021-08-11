import { Component, OnInit } from '@angular/core';

import { IArticle } from 'src/app/interfaces/article.model';
import { ICrypto } from 'src/app/interfaces/crypto.model';

import { CryptoService } from 'src/app/crypto/crypto.service';
import { NewsService } from 'src/app/news/news.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    news!: IArticle[];
    cryptos!: ICrypto[];

    top_5_by_price!: ICrypto[];
    top_5_by_24h!: ICrypto[];
    top_5_by_7d!: ICrypto[];

    constructor(
        private newsService: NewsService,
        private cryptoService: CryptoService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.newsService
            .getLatest()
            .subscribe(
                data => {
                    if(data.length > 10) {
                        this.news = data.slice(0, 10)
                    } else {
                        this.news = data
                    }
                },
                err => this.toastr.error(err.error.message)
            );
        this.cryptoService
            .getLatest()
            .subscribe(
                data => {
                    this.cryptos = data
                    this.top_5_by_price = this.cryptoService.sortItems(data, false, 'price').slice(0, 5)
                    this.top_5_by_24h = this.cryptoService.sortItems(data, false, 'percent_change_24h').slice(0, 5)
                    this.top_5_by_7d = this.cryptoService.sortItems(data, false, 'percent_change_7d').slice(0, 5)
                },
                err => this.toastr.error(err.error.message)
            );
    };

}
