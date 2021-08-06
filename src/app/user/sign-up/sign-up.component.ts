import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';



@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    constructor(private userService: UserService) { }

    signUpSubmit(form: NgForm): void {
        if (form.invalid) return;

        let userData = {
            email: form.controls.email.value,
            password: form.controls.password.value,
            rePassword: form.controls.rePassword.value,
            username: form.controls.username.value
        };

        this.userService.signUp(userData)
    }
}
