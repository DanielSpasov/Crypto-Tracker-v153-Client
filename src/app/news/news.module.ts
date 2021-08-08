import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { AuthModule } from '../auth/auth.module';

import { NewsRoutingModule } from './news-routing.module';

import { NewsService } from './news.service';

import { CreateArticleComponent } from './create-article/create-article.component';
import { NewsComponent } from './news/news.component';
import { NewsArticleComponent } from './news-article/news-article.component';



@NgModule({
  declarations: [
    CreateArticleComponent,
    NewsComponent,
    NewsArticleComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthModule,
    NewsRoutingModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
