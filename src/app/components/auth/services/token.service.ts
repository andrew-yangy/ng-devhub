import {Observable, BehaviorSubject} from "rxjs";
import {Injectable, Inject} from "@angular/core";
import {AUTH_CONFIG, AuthConfig} from "../auth.options";

@Injectable()
export class TokenWrapper {

    protected token: string = '';

    setValue(token: string) {
        this.token = token;
    }

    getValue() {
        return this.token;
    }
}
@Injectable()
export class TokenService {
    protected token$: BehaviorSubject<any> = new BehaviorSubject(null);
    constructor(@Inject(AUTH_CONFIG) protected config: AuthConfig,
                protected tokenWrapper: TokenWrapper
    ) {
        this.get().subscribe(token => this.publishToken(token));
    }
    private getter = (): Observable<TokenWrapper> => {
        const tokenValue = localStorage.getItem(this.config.tokenKey);
        this.tokenWrapper.setValue(tokenValue);
        return Observable.of(this.tokenWrapper);
    };
    private setter = (token: string|TokenWrapper): Observable<null> => {
        const raw = token instanceof TokenWrapper ? token.getValue() : token;
        localStorage.setItem(this.config.tokenKey, raw);
        return Observable.of(null);
    };

    private deleter = (): Observable<null> => {
        localStorage.removeItem(this.config.tokenKey);
        return Observable.of(null);
    };
    get(): Observable<TokenWrapper> {
        return this.getter();
    }
    set(rawToken: string): Observable<TokenWrapper> {
        return this.setter(rawToken)
            .switchMap(_ => this.get())
            .do((token: TokenWrapper) => {
                this.publishToken(token);
            });
    }
    tokenChange(): Observable<TokenWrapper> {
        return this.token$.publish().refCount();
    }

    clear(): Observable<any> {
        this.publishToken(null);

        return this.deleter();
    }

    protected publishToken(token: TokenWrapper): void {
        this.token$.next(token);
    }
}