import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    signUp(userData: object) { return this.http.post<any>('http://localhost:4153/user/sign-up', userData) }
    signIn(userData: object) { return this.http.post<any>('http://localhost:4153/user/sign-in', userData) }

}
