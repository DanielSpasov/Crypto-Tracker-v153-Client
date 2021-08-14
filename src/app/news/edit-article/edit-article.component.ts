import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IArticle } from 'src/app/interfaces/article.model';

import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-edit-article',
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

    article!: IArticle;

    editForm!: FormGroup;

    constructor(
        private newsService: NewsService,
        private router: Router,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {

        const articleID = this.router.url.split('/news/')[1].split('/edit')[0];
        if(!articleID) return;

        this.newsService
            .getArticle(articleID)
            .subscribe(
                data => {
                    this.article = data;
                    this.editForm.controls.title.setValue(data.title);
                    this.editForm.controls.content.setValue(data.content);
                },
                err => this.toastr.error(err.error.message)
            );
        
        this.editForm = new FormGroup({
            title: new FormControl(),
            image: new FormControl(),
            content: new FormControl(),
        })
    };

    image!: File;
    imageChange(e: any): void { this.image = e.target.files[0] };
    editArticle(): void {

        if (this.editForm.invalid) {
            if (this.editForm.controls.title.errors?.required) this.toastr.error('Title is required');
            if (this.editForm.controls.title.errors?.minlength) this.toastr.error('Title must be at least 6 symbols long');
            if (this.editForm.controls.content.errors?.required) this.toastr.error('Content is required');
            if (this.editForm.controls.content.errors?.minlength) this.toastr.error('Content must be at least 30 symbols long');
            return;
        }
        
        const articleID = this.router.url.split('/news/')[1].split('/edit')[0];
        if(!articleID) return;

        let editedData = {
            title: this.editForm.controls.title.value,
            content: this.editForm.controls.content.value
        };

        this.newsService
            .editArticle(articleID, editedData)
            .subscribe(
                () => {
                    this.toastr.success('Article Edited Successfully')
                    this.router.navigate(['/news', this.article._id])
                },
                err => this.toastr.error(err.error.message)
            );
    };

}
