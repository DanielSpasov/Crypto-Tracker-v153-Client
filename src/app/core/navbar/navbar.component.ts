import { Component } from '@angular/core';

import { AuthService } from '../../auth/auth.service';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    isAuth = this.authService.isAuth();
    userID = localStorage.getItem('user-id')

    constructor(private authService: AuthService) { }

}
