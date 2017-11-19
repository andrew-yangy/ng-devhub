import {ModuleWithProviders, NgModule, InjectionToken} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {ThemeModule} from '../../@theme/theme.module';
import {AuthService} from './services/auth.service';
import {TokenService, TokenWrapper} from "./services/token.service";
import {AuthConfig, AUTH_CONFIG, USER_CONFIG, authConfigFactory} from "./auth.options";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        // SharedModule,
        ThemeModule,
        HttpClientModule
    ],
    declarations: [
        AuthLayoutComponent,
        LoginComponent,
    ],
    exports: [
        AuthLayoutComponent,
        LoginComponent
    ],
    providers: [],
})
export class AuthModule {
    static forRoot(authConfig?: AuthConfig): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: AuthModule,
            providers: [
                { provide: USER_CONFIG, useValue: authConfig},
                { provide: AUTH_CONFIG, useFactory: authConfigFactory, deps: [USER_CONFIG]},
                AuthService,
                TokenService,
                TokenWrapper
            ],
        };
    }
}
