import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AuthGuard} from './@core/services/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: './pages/pages.module#PagesModule'
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
