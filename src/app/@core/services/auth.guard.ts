import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router: Router) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!localStorage.getItem('current_token')) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
