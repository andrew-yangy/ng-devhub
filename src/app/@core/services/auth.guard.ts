import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../../components/auth/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate() {
        return this.authService.isAuthenticated()
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['login']);
                }
            });
    }
}
