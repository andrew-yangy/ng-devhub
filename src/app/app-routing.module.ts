import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {LayoutComponent} from './components/layout/layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard} from './@core/services/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent}
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
