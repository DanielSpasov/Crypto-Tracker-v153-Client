import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { CryptoService } from '../crypto/crypto.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { SameValueDirective } from './same-value.directive';
import { IsEmailDirective } from './is-email.directive';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';



@NgModule({
    declarations: [
        HomeComponent,
        NewsComponent,
        SignInComponent,
        SignUpComponent,
        SignOutComponent,
        SameValueDirective,
        IsEmailDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        FormsModule
    ],
    exports: [
        HomeComponent,
        NewsComponent,
        SignInComponent,
        SignUpComponent,
        SignOutComponent
    ],
    providers: [
        UserService,
        AuthService
    ]
})
export class SharedModule { }
