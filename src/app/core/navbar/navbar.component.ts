import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    isAuth = this.authService.isAuth();

    constructor(private authService: AuthService) { }

}
