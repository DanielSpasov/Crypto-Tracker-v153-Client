import { Component, Input } from '@angular/core';

import { IArticle } from 'src/app/interfaces/article.model';



@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent {

  @Input() article!: IArticle;

  constructor() { }

}
