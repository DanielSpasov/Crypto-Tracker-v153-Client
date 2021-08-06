import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';



@NgModule({
    declarations: [
        HomeComponent,
        NewsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        FormsModule
    ],
    exports: [
        HomeComponent,
        NewsComponent
    ]
})
export class SharedModule { }
