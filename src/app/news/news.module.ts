import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { AuthModule } from '../auth/auth.module';

import { NewsRoutingModule } from './news-routing.module';

import { NewsService } from './news.service';

import { CreateArticleComponent } from './create-article/create-article.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';



@NgModule({
  declarations: [
    CreateArticleComponent,
    NewsPageComponent,
    NewsArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    AuthModule,
    NewsRoutingModule
  ],
  providers: [
    NewsService
  ],
  exports: [
    NewsArticleComponent
  ]
})
export class NewsModule { }
