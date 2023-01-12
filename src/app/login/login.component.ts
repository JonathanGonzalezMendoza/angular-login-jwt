import { Component } from '@angular/core';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(public userService: UserService){}

  login() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.login(user).subscribe(data => {
      console.log(data); // Imprime el Token devuelto
    });
  }

}
