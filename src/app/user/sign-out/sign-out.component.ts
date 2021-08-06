import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';



@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void { this.userService.signOut() }
}
