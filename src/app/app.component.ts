import { Component } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './interfaces/user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  user: IUser | undefined;
  users: IUser[] | undefined;

  constructor(public userService: UserService) { }

  testHandler() {
    return this.userService
      .getUser()
      .subscribe(data => this.user = { username: data.username, _id: data._id });
  }

  testHandlerTwo() {
    return this.userService
      .getUsers()
      .subscribe(data => this.users = data);
  }
}
