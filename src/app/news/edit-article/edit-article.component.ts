import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ɵangular_packages_forms_forms_bl } from '@angular/forms';

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
                    this.editForm.controls.image.setValue(data.image);
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

    editArticle(): void {

        const articleID = this.router.url.split('/news/')[1].split('/edit')[0];
        if(!articleID) return;

        let editedData = {
            title: this.editForm.controls.title.value,
            image: this.editForm.controls.image.value,
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
