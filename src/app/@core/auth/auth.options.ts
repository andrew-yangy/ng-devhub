import {InjectionToken} from "@angular/core";
export interface AuthConfig {
    tokenKey?: string;
    authUrl?: string;
    redirectTo?: string;
}
export const defaultConfig: AuthConfig = {
    tokenKey: 'auth_token',
    redirectTo: '/'
};
export function authConfigFactory(config: AuthConfig) {
    return Object.assign(defaultConfig, config);
}
export class AuthResult {
    constructor(
        readonly success: boolean,
        readonly token: string,
        readonly redirect?: string,
    ) {}
}
export class LoginData {
    email: string;
    password: string;
}
export const USER_CONFIG = new InjectionToken<AuthConfig>('User config');
export const AUTH_CONFIG = new InjectionToken<AuthConfig>('Auth config');
