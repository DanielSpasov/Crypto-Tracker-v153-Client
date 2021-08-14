import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';



@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    constructor(
        private userService: UserService,
        private toastr: ToastrService
    ) { }

    signInSubmit(form: NgForm): void {
        if (form.invalid) {
            if (form.controls.email.errors?.required) this.toastr.error('Email is required');
            if (form.controls.email.errors?.isEmail) this.toastr.error('Email is Invalid');
            if (form.controls.password.errors?.required) this.toastr.error('Password is required');
            if (form.controls.password.errors?.minlength) this.toastr.error('Password must be at least 6 symbols long');
            return;
        }

        const userData = {
            email: form.controls.email.value,
            password: form.controls.password.value
        };

        this.userService.signIn(userData)
    }
}
