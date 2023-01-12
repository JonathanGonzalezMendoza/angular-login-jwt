import { Injectable, ɵtransitiveScopesFor } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authenticated: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*
        Si queremos obtener datos de la ruta o estado: return this.checkUserLogin(route | state);
      */
    return this.checkUserLogin();
  }

  // Verifica que exista el token en los cookies, sino redirecciona al inicio
  checkUserLogin(): boolean {
    const scope = this.userService.getUserLogged();
    if(!scope) {
      console.log("No tienes acceso");
      this.router.navigate(['not-found']); // Si no tiene acceso, lo redirecciona
      this.authenticated = false;
    }
    return this.authenticated; 
  }

  // Si manejamos roles para cada tipo de usuario

  /*checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    console.log("Obtiene datos de la ruta como rol, data,..." + route);
    const {scope = []} = this.userService.getUserLogged();
    if(scope.includes(route.data.role)) {
      return true;
    } else {
      this.router.navigate(['not-found']);
      return false;
    }
  }*/
}
