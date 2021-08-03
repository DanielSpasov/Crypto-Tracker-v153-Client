import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user.model';



@Injectable()
export class UserService {

    constructor(private http: HttpClient, private router: Router) { }

    getUser() {
        let userID = this.readCookie('userID')
        return this.http.get<IUser>(`http://localhost:4153/user/${userID}`)
    }

    signUp(userData: any) {
        this.http
            .post<any>('http://localhost:4153/user/sign-up', userData)
            .subscribe(
                data => this.signIn({
                    email: userData.email,
                    password: userData.password
                }),
                err => console.log(err)
            )
    }

    signIn(userData: object) {
        this.http
            .post<any>('http://localhost:4153/user/sign-in', userData)
            .subscribe(
                data => {
                    localStorage.setItem('auth-token', data.token);
                    document.cookie = `userID=${data._id}`;
                    this.router.navigate(['/']);
                },
                err => console.log(err)
            )
    }

    signOut() {
        localStorage.setItem('auth-token', '');
        document.cookie = `userID=`;
        this.router.navigate(['/'])
    }

    readCookie(cookie: string): string {
        let x = document.cookie.split('; ')
        for (let y of x) {
            if (y.split('=')[0] === cookie) return y.split('=')[1]
        }
        return cookie
    }

}
