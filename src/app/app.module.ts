import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CryptoModule } from './crypto/crypto.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    CryptoModule,
    UserModule,
    AuthModule,
    NewsModule,
    JwtModule.forRoot({
      config: {
        allowedDomains: ['http://localhost:4153'],
        disallowedRoutes: [],
      },
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
