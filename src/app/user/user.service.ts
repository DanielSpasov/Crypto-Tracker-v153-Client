import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { IUser } from '../interfaces/user.model';

import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;



@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private toastr: ToastrService
    ) { }

    getUser(userID: string) {
        return this.http.get<IUser>(`${apiUrl}/user/${userID}`);
    };

    signUp(userData: any) {
        this.http
            .post<any>(`${apiUrl}/user/sign-up`, userData)
            .subscribe(
                () => {
                    this.signIn({
                        email: userData.email,
                        password: userData.password
                    })
                    this.toastr.success('Signed Up Successfully')
                },
                err => this.toastr.error(err.error.message)
            );
    };

    signIn(userData: object) {
        this.http
            .post<any>(`${apiUrl}/user/sign-in`, userData)
            .subscribe(
                data => {
                    localStorage.setItem('auth-token', data.token);
                    localStorage.setItem('user-id', data._id);
                    this.toastr.success('Signed In Successfully')
                    this.router.navigate(['/']);
                },
                err => this.toastr.error(err.error.message)
            );
    };

    signOut() {
        localStorage.setItem('auth-token', '');
        localStorage.setItem('user-id', '');
        this.toastr.success('You have been Singed Out')
        this.router.navigate(['/']);
    };
}