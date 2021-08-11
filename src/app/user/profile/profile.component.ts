import { Component, OnInit } from '@angular/core';

import { ActiveToast, ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

import { IUser } from 'src/app/interfaces/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    user!: IUser;
    isOwner!: boolean;
    isChangingUsername: boolean = false;

    constructor(
        private userService: UserService,
        private toastr: ToastrService,
        private router: Router
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
    };

    ngOnInit(): void {
        const userID = this.router.url.split('/user/')[1];
        if (!userID) return;
        this.userService
            .getUser(userID)
            .subscribe(
                data => {
                    this.user = data;
                    this.isOwner = localStorage.getItem('user-id') === this.user._id;
                },
                err => this.toastr.error(err.error.message)
            );
    };

    toggelChangeUsername(): ActiveToast<any> | void {
        const userID = localStorage.getItem('user-id');
        if (this.user._id !== userID) return this.toastr.error('You cannot change other people\'s usernames');
        this.isChangingUsername = !this.isChangingUsername;
    };

    changeUsername(form: NgForm): ActiveToast<any> | void {
        const userID = localStorage.getItem('user-id');
        if (this.user._id !== userID) return this.toastr.error('You cannot change other people\'s usernames');

        this.userService
            .changeUsername(this.user._id, form.controls.username.value)
            .subscribe(
                data => {
                    this.toastr.success('Username change successful');
                    this.user = data;
                    console.log(data)
                },
                err => this.toastr.error(err.error.message)
            );
        this.isChangingUsername = false;
    };

}
