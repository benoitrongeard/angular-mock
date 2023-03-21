import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mock';

  users: User[] = [];

  constructor(private userService: UserService) {
    // this.userService.getUsers().subscribe(res => this.users = res, err => console.error(err.message));
  }
}
