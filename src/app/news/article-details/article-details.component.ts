import { Component, OnInit } from '@angular/core';

import { IArticle } from 'src/app/interfaces/article.model';

import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

    article!: IArticle;

    constructor(
        private newsService: NewsService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    ngOnInit(): void {

        let articleID = this.router.url.split('/news/')[1];

        this.newsService.
            getArticle(articleID)
            .subscribe(
                data => this.article = data,
                err => this.toastr.error(err.error.message)
            );
    };

}
