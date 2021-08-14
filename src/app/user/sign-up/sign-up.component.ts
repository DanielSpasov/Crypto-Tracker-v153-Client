import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';



@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    constructor(
        private userService: UserService,
        private toastr: ToastrService
    ) { }

    signUpSubmit(form: NgForm): void {
        if (form.invalid) {
            if (form.controls.email.errors?.required) this.toastr.error('Email is required');
            if (form.controls.email.errors?.isEmail) this.toastr.error('Email is Invalid');
            if (form.controls.password.errors?.required) this.toastr.error('Password is required');
            if (form.controls.password.errors?.minlength) this.toastr.error('Password must be at least 6 symbols long');
            if (form.controls.rePassword.errors?.required) this.toastr.error('Repeat Password is required');
            if (form.controls.rePassword.errors?.minlength) this.toastr.error('Repeat Password must be at least 6 symbols long');
            if (form.controls.rePassword.errors?.sameValue) this.toastr.error('Passwords doesn\'t match');
            return;
        }

        let userData = {
            email: form.controls.email.value,
            password: form.controls.password.value,
            rePassword: form.controls.rePassword.value,
            username: form.controls.username.value
        };

        this.userService.signUp(userData)
    }
}
