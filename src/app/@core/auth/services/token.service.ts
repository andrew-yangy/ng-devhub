import {Inject, Injectable} from "@angular/core";
import {AUTH_CONFIG, AuthConfig} from '../auth.options';

@Injectable()
export class TokenService {
    constructor(@Inject(AUTH_CONFIG) protected config: AuthConfig) {
    }
    set token(token: string) {
        localStorage.setItem(this.config.tokenKey, token);
    }
    get token(): string {
        return localStorage.getItem(this.config.tokenKey);
    }
    logout() {
        localStorage.removeItem(this.config.tokenKey);
    }
}
