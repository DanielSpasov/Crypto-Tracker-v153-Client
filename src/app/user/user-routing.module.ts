import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';

import { AuthGuard } from '../auth/auth.guard';



const routes: Routes = [
    {
        path: 'user/sign-in',
        component: SignInComponent
    },
    {
        path: 'user/sign-up',
        component: SignUpComponent
    },
    {
        path: 'user/sign-out',
        component: SignOutComponent,
        canActivate: [AuthGuard]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);