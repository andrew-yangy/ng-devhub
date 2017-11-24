import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AUTH_CONFIG, AuthConfig, AuthResult, LoginData} from '../auth.options';
import {TokenService} from './token.service';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

export const DUMMY = 'dummy token';
@Injectable()
export class AuthService {
    constructor(@Inject(AUTH_CONFIG) protected config: AuthConfig,
                protected tokenService: TokenService,
                protected http: HttpClient) {
    }
    isAuthenticated(): boolean {
        return atob(this.tokenService.token) === DUMMY;
    }
    authenticate(data: LoginData): Observable<AuthResult> {
        if (this.config.authUrl) {
            return this.http.post(this.config.authUrl, data)
                .pipe(
                    tap((res: any) => this.tokenService.token = res.token),
                    map((res: any) => new AuthResult(res.sucess, res.token, this.config.redirectTo))
                );
        } else {
            this.tokenService.token = btoa(DUMMY);
            return of(new AuthResult(this.isAuthenticated(), this.tokenService.token, this.config.redirectTo));
        }

    };
}
