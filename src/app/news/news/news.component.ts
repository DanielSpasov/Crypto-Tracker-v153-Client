import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { IArticle } from 'src/app/interfaces/article.model';
import { NewsService } from '../news.service';



@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    news!: IArticle[];

    constructor(
        private newsService: NewsService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.newsService
            .getLatest()
            .subscribe(
                data => this.news = data,
                err => this.toastr.error(err.error.message)
            );
    };

}
