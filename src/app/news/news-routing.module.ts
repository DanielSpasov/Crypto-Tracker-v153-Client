import { RouterModule, Routes } from '@angular/router';

import { NewsPageComponent } from './news-page/news-page.component';

import { AuthGuard } from '../auth/auth.guard';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EditArticleComponent } from './edit-article/edit-article.component';



const routes: Routes = [
    {
        path: 'news',
        component: NewsPageComponent
    },
    {
        path: 'news/create',
        component: CreateArticleComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'news/:id',
        component: ArticleDetailsComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'news/:id/edit',
        component: EditArticleComponent,
        canActivate: [AuthGuard] 
    },
];

export const NewsRoutingModule = RouterModule.forChild(routes);