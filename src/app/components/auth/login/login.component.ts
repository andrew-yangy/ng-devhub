import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {AuthResult, LoginData} from '../auth.options';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    showMessages: any = {};
    errors: string[] = [];
    messages: string[] = [];
    user: LoginData = new LoginData();
    submitted: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
    }
    login() {
        this.authService.authenticate(this.user)
            .subscribe((result: AuthResult) => {
                const redirect = result.redirect;
                if (result.success && redirect) {
                    return this.router.navigateByUrl(redirect);
                }
            });
    }
    getConfigValue(par?: any) {
        return ;
    }
}
