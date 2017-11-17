import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {ThemeModule} from '../../@theme/theme.module';
import {AuthService} from './services/auth.service';

@NgModule({
    imports: [
        // SharedModule,
        ThemeModule
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
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: AuthModule,
            providers: [AuthService],
        };
    }
}
