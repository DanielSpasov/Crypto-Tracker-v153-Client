import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';



@NgModule({
    declarations: [
        NavbarComponent,
        LoaderComponent,
        InvalidPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        LoaderComponent,
        InvalidPageComponent
    ]
})
export class CoreModule { }
