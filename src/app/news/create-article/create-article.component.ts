import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NewsService } from '../news.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {

    constructor(
        private newsService: NewsService,
        private toastr: ToastrService
    ) { }

    createArticleSubmit(form: NgForm): void {

        // TODO: Image Uplaod

        if (form.invalid) return;

        const userID = localStorage.getItem('user-id');
        if (!userID) return;

        this.newsService
            .createArticle(
                form.controls.title.value,
                form.controls.image.value,
                form.controls.content.value,
                userID
            )
            .subscribe(
                data => console.log(data),
                err => this.toastr.error(err.error.message)
            );
    };

}
