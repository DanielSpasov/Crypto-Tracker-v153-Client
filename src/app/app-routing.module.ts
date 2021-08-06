import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { NewsComponent } from './shared/news/news.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { SignOutComponent } from './shared/sign-out/sign-out.component';
import { InvalidPageComponent } from './core/invalid-page/invalid-page.component';

import { AuthGuard } from './shared/auth.guard';



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    { path: 'home', component: HomeComponent },
    {
        path: 'user',
        children: [
            { path: 'sign-in', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'sign-out', component: SignOutComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: 'news', component: NewsComponent },
    { path: '**', component: InvalidPageComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);