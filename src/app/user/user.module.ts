import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';

import { UserService } from './user.service';

import { IsEmailDirective } from './directives/is-email.directive';
import { SameValueDirective } from './directives/same-value.directive';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    IsEmailDirective,
    SameValueDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    AuthModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
