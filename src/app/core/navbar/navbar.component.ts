import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isAuth!: boolean;
    isLoaded = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService
            .checkAuth()
            .subscribe(data => {
                this.isAuth = Boolean(data);
                this.isLoaded = true;
            })
    }

}
