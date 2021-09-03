import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { NewsService } from '../news.service';
import { ActiveToast, ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html',
    styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {

    constructor(
        private newsService: NewsService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    image!: File;
    imageChange(e: any): void { this.image = e.target.files[0] };
    createArticleSubmit(form: NgForm): ActiveToast<any> | void {

        if (this.image.type !== 'image/png') return this.toastr.error('Invalid Image Format');
        // if (this.image.type !== 'image/jpeg') return this.toastr.error('Invalid Image Format');

        if (form.invalid) {
            if (form.controls.title.errors?.required) this.toastr.error('Title is required');
            if (form.controls.title.errors?.minlength) this.toastr.error('Title must be at least 8 symbols long');
            if (form.controls.image.errors?.required) this.toastr.error('Image is required');
            if (form.controls.content.errors?.required) this.toastr.error('Content is required');
            if (form.controls.content.errors?.minlength) this.toastr.error('Content must be at least 30 symbols long');
            if (form.controls.content.errors?.maxlength) this.toastr.error('Content cannot be more than 300 symbols long');
            return;
        };

        const formData = new FormData();
        formData.append('file', this.image);

        const userID = localStorage.getItem('user-id');
        if (!userID) return;

        let imageFormatArr = this.image.name.split('.')

        this.newsService
            .createArticle(
                form.controls.title.value,
                formData,
                {
                    name: this.image.name,
                    format: this.image.name.split('.')[imageFormatArr.length - 1]
                },
                form.controls.content.value,
                userID
            )
            .subscribe(
                () => {
                    this.toastr.success('Article Created');
                    this.router.navigate(['news']);
                },
                err => this.toastr.error(err.error.message)
            );

    };

}
