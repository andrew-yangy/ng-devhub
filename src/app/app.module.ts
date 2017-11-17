import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './components/auth/auth.module';
import {AuthGuard} from './@core/services/auth.guard';
import {ThemeModule} from './@theme/theme.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AuthModule.forRoot(),
        ThemeModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        DashboardComponent,
    ],
    providers: [
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
