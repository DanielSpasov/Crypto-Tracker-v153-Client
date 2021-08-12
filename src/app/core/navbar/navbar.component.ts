import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/interfaces/user.model';

import { AuthService } from '../../auth/auth.service';
import { UserService } from 'src/app/user/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isAuth = this.authService.isAuth();
    user!: IUser;

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {

        let userID = localStorage.getItem('user-id');
        if(!userID) return;

        this.userService
            .getUser(userID)
            .subscribe(
                data => this.user = data,
                err => this.toastr.error(err.error.message)
            );
    };

}
