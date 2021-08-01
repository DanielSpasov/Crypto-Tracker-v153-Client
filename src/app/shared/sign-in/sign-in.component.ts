import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.userService.checkLoggedIn()
    }

    signInSubmit(form: NgForm): void {
        if (form.invalid) return;

        let userData = {
            email: form.controls.email.value,
            password: form.controls.password.value
        };

        this.userService
            .signIn(userData)
            .subscribe(
                data => {
                    let token = data.token;
                    localStorage.setItem('auth-token', token)
                    this.router.navigate(['/']);
                },
                err => console.log(err.error.message)
            )
    }
}
