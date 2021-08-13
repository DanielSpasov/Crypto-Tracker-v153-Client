import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';



@Injectable({
    providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

    isAuth!: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.authService.isAuth()) {
            this.router.navigate(['/'])
            return true;
        }
        return false;
    }

}