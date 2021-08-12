import { Component, OnInit } from '@angular/core';

import { IArticle } from 'src/app/interfaces/article.model';

import { ActiveToast, ToastrService } from 'ngx-toastr';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

    article!: IArticle;
    userID = localStorage.getItem('user-id');

    deleteArticleClicks = 3;

    constructor(
        private newsService: NewsService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    ngOnInit(): void {

        const articleID = this.router.url.split('/news/')[1];

        this.newsService
            .getArticle(articleID)
            .subscribe(
                data => this.article = data,
                err => this.toastr.error(err.error.message)
            );
    };

    deleteArticle(): ActiveToast<any> | void {
        if (this.deleteArticleClicks === 3) this.toastr.info('Click 3 more times to delete article');
        if (this.deleteArticleClicks === 2) this.toastr.warning('Click 2 more times to delete article');
        if (this.deleteArticleClicks === 1) this.toastr.error('Click 1 more time to delete article');

        if (this.deleteArticleClicks === 0) {

            if (this.userID !== this.article.creator._id) return this.toastr.error('You don\'t have permission to delete this article.');

            this.newsService
                .deleteArticle(this.article._id)
                .subscribe(
                    () => {
                        this.toastr.success('Article Deleted');
                        this.router.navigate(['/news']);
                    },
                    err => this.toastr.error(err.error.message)
                )
        };
        this.deleteArticleClicks--;
    };

}
