import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { IUser } from '../interfaces/user.model';



@Injectable()
export class UserService {

    constructor(private http: HttpClient, private router: Router) { }

    getUser() {
        let userID = localStorage.getItem('user-id');
        if (userID) {
            return this.http.get<IUser>(`http://localhost:4153/user/`, {
                headers: { 'user-id': userID }
            });
        } else {
            return this.http.get<IUser>(`http://localhost:4153/user/`, {
                headers: { 'user-id': '' }
            });
        }
    };

    signUp(userData: any) {
        this.http
            .post<any>('http://localhost:4153/user/sign-up', userData)
            .subscribe(
                data => this.signIn({
                    email: userData.email,
                    password: userData.password
                }),
                err => console.log(err)
            );
    };

    signIn(userData: object) {
        this.http
            .post<any>('http://localhost:4153/user/sign-in', userData)
            .subscribe(
                data => {
                    localStorage.setItem('auth-token', data.token);
                    localStorage.setItem('user-id', data._id);
                    this.router.navigate(['/']);
                },
                err => console.log(err)
            );
    };

    signOut() {
        localStorage.setItem('auth-token', '');
        localStorage.setItem('user-id', '');
        this.router.navigate(['/']);
    };

    checkAuth(): Observable<object> {
        let token = localStorage.getItem('auth-token')
        if (token) {
            return this.http.get(`http://localhost:4153/user/validateToken`, {
                headers: { 'x-auth-token': token }
            })
        } else {
            return this.http.get(`http://localhost:4153/user/validateToken`, {
                headers: { 'x-auth-token': '' }
            })
        }
    };
}
