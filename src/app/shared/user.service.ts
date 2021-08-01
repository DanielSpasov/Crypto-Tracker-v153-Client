import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.model';



@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUser() { return this.http.get<IUser>('http://localhost:4153/user/getOne'); }
    getUsers() { return this.http.get<Array<IUser>>('http://localhost:4153/user/getAll'); }

    signUp(userData: object) { return this.http.post<any>('http://localhost:4153/user/sign-up', userData) }
    signIn(userData: object) { return this.http.post<any>('http://localhost:4153/user/sign-in', userData) }

    checkLoggedIn() {
        try {
            let token = localStorage.getItem('auth-token')
            if (token === null) {
                localStorage.setItem('-authtoken', '')
                token = ''
            }

            this.http.post<any>(`http://localhost:4153/user/tokenIsValid`, null, {
                headers: { 'x-auth-token': token }
            }).subscribe(
                data => {
                    if (data.isAuth) {
                        this.http.get(`http://localhost:4153/user/${data._id}`, {
                            headers: { 'x-auth-token': data.token }
                        }).subscribe(
                            data => console.log(data),
                            err => console.log(err)
                        )
                    }
                },
                err => console.log(err)
            )
        } catch (err) { console.log(err.error.message) }
    }
}
