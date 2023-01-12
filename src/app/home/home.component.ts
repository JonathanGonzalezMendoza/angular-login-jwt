import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    
  }

  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    })
  }

  logout() {
    this.userService.logout();
  }

}
