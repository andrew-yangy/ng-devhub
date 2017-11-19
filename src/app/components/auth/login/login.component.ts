import {Component, OnInit} from "@angular/core";
import {AuthResult, AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    redirectDelay: number = 0;
    showMessages: any = {};
    provider: string = '';

    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
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
                const redirect = result.getRedirect();
                if (result.isSuccess() && redirect) {
                    return this.router.navigateByUrl(redirect);
                }
            });
    }
    getConfigValue(par?: any) {
        return ;
    }
}
