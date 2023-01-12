import { Injectable } from "@angular/core";
import { UserService } from "./users.service";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(private userService: UserService) {}
    
    

    
}