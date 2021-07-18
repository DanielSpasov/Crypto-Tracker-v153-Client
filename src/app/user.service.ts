import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './interfaces/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<IUser>('http://localhost:4153/user/getOne');
  }
}
