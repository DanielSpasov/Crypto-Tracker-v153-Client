import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NewsService } from '../news.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';



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
    createArticleSubmit(form: NgForm): void {

        if (form.invalid) return;

        const formData = new FormData();
        formData.append('file', this.image);

        const userID = localStorage.getItem('user-id');
        if (!userID) return;

        this.newsService
            .createArticle(
                form.controls.title.value,
                formData,
                {
                    name: this.image.name,
                    format: this.image.name.split('.')[1]
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
