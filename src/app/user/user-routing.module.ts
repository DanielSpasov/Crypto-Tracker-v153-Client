import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from '../auth/auth.guard';
import { NotAuthGuard } from '../auth/not-auth.guard'



const routes: Routes = [
    {
        path: 'user/sign-in',
        component: SignInComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'user/sign-up',
        component: SignUpComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'user/sign-out',
        component: SignOutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user/:id',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
];



export const UserRoutingModule = RouterModule.forChild(routes);