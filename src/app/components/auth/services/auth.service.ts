import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AUTH_CONFIG, AuthConfig} from "../auth.options";
import {HttpClient} from "@angular/common/http";
import {HttpResponse} from "@angular/common/http";
import {TokenService, TokenWrapper} from "./token.service";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export class AuthResult {
    constructor(
        protected success: boolean,
        protected token: any,
        protected response?: any,
        protected redirect?: any,
        protected errors?: string[],
        protected messages?: string[]) {}
    isSuccess(): boolean {
        return this.success;
    }
    getTokenValue(): any {
        return this.token;
    }
    replaceToken(token: any): any {
        this.token = token
    }
    getResponse(): any {
        return this.response;
    }
    getRedirect(): any {
        return this.redirect;
    }

    getErrors(): string[] {
        return this.errors.filter(val => !!val);
    }

    getMessages(): string[] {
        return this.messages.filter(val => !!val);
    }
}

@Injectable()
export class AuthService {
    protected defalutDelay: number = 100;
    getToken(): Observable<TokenWrapper> {
        return this.tokenService.get();
    }
    // todo: verify token
    isAuthenticated(): Observable<any> {
        return this.getToken().map(token => !!(token && token.getValue()));
    }

    constructor(@Inject(AUTH_CONFIG) protected config: AuthConfig,
                protected tokenService: TokenService,
                protected http: HttpClient) {
    }
    protected createSuccessResponse(): HttpResponse<Object> {
        return new HttpResponse<Object>({ body: {}, status: 200 });
    }
    authenticate(data: any): Observable<AuthResult> {
        return this.getAuth(data)
            .switchMap((result: AuthResult) => {
                if (result.isSuccess() && result.getTokenValue()) {
                    return this.tokenService.set(result.getTokenValue())
                        .switchMap(_ => this.tokenService.get())
                        .map(token => {
                            result.replaceToken(token);
                            return result;
                        });
                }
                return Observable.of(result);
            })
    };
    private getAuth(data): Observable<AuthResult> {
        if(this.config.authUrl) {
            return this.http.post(this.config.authUrl, data)
                .switchMap((res: any) => {
                    return Observable.of(new AuthResult(
                        res.success,
                        res.token,
                        this.createSuccessResponse(),
                        '/'
                    ))
                })
        } else {
            let dummy = new AuthResult(
                true,
                btoa(data),
                this.createSuccessResponse(),
                '/');
            return Observable.of(dummy)
                .delay(this.defalutDelay);
        }
    }
}
