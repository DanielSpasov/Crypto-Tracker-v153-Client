import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUser() { return this.http.get<IUser>('http://localhost:4153/user/getOne'); }
    getUsers() { return this.http.get<Array<IUser>>('http://localhost:4153/user/getAll'); }

    register(userData: object) { return this.http.post<IUser>('http://localhost:4153/user/register', userData) }

}
