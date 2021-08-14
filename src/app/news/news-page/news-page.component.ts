import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { IArticle } from 'src/app/interfaces/article.model';
import { NewsService } from '../news.service';



@Component({
    selector: 'app-news',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

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

    searchNews(form: NgForm): void {
        this.newsService
            .searchNews(form.controls.search.value)
            .subscribe(
                data => this.news = data,
                err => this.toastr.error(err.error.message)
            )
    }
}
