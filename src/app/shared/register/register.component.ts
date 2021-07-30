import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router"

import { UserService } from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    registerSubmit(form: NgForm): void {
        if (form.invalid) return;

        let userData = {
            email: form.controls.email.value,
            password: form.controls.password.value,
            rePassword: form.controls.rePassword.value
        }

        this.userService
            .register(userData)
            .subscribe(
                data => console.log(data),
                err => console.log(err.error.message)
            )
        // this.router.navigate(['/login'])
    }

}
