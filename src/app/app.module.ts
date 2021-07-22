import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './user.service';
import { CryptoService } from './crypto.service';
import { MainComponent } from './main/main.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserService
    },
    {
      provide: CryptoService,
      useClass: CryptoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
