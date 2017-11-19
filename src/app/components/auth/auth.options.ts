import {InjectionToken} from "@angular/core";
export interface AuthConfig {
    tokenKey: string;
    authUrl?: string;
}
export const defaultConfig: AuthConfig = {
    tokenKey: 'auth_token',
    authUrl: null
};
export function authConfigFactory(config: AuthConfig) {
    return Object.assign(defaultConfig, config)
}
export const USER_CONFIG = new InjectionToken<AuthConfig>('User config');
export const AUTH_CONFIG = new InjectionToken<AuthConfig>('Auth config');
