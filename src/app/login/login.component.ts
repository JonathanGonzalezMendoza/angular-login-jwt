import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(public userService: UserService, public router: Router){}

  login() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.login(user).subscribe(data => {
      console.log(data); // Imprime el Token devuelto
      this.userService.setToken(data.token); // Almacena el token que llega desde la API
      this.router.navigateByUrl('home'); // Si el logueo es correcto, redirecciona a la pagina principal
    }, (err: HttpErrorResponse) => {
      if(err.error instanceof Error) {
        console.log("Client-side error");
      } else {
        console.log("Server-side error");
      }
    });
  }

}
