import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';

import { AuthGuard } from '../auth/auth.guard';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NewsArticleComponent } from './news-article/news-article.component';



const routes: Routes = [
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'news/create',
        component: CreateArticleComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news/:id',
        component: NewsArticleComponent,
        canActivate: [AuthGuard] 
    },
];

export const NewsRoutingModule = RouterModule.forChild(routes);