import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()
export class AuthService {

    constructor(private jwtHelper: JwtHelperService) { }

    isAuth(): boolean {
        const token = localStorage.getItem('auth-token')
        if (token) {
            if (this.jwtHelper.isTokenExpired(token)) return false
            if (!this.jwtHelper.decodeToken(token)) return false
            return true
        } else { return false }
    }
}
