import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { NewsModule } from '../news/news.module';
import { CryptoModule } from '../crypto/crypto.module';

import { HomeComponent } from './home/home.component';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        NewsModule,
        CryptoModule,
        FormsModule
    ]
})
export class SharedModule { }
