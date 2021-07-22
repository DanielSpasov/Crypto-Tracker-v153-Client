import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { UserService } from './user.service';
import { CryptoService } from './crypto.service';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
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
