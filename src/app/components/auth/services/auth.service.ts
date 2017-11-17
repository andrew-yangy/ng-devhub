import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class AuthResult {
    constructor(
        protected success: boolean,
        protected token: any,
        protected errors: string[] = [],
        protected messages: string[] = []) {}
    isSuccess(): boolean {
        return this.success;
    }
    getTokenValue(): any {
        return this.token;
    }
}

@Injectable()
export class AuthService {
    defaultDelay: number = 100;
    constructor() {
    }
    authenticate(email: string): Observable<boolean> {
        return Observable.of(new AuthResult(true, btoa(email)))
            .map((res: AuthResult) => {
                localStorage.setItem('current_token', res.getTokenValue());
                return res.isSuccess();
            })
            .delay(this.defaultDelay);
    }
}
