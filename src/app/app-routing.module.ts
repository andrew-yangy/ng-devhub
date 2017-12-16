import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './@core/auth/auth-guard/auth.guard';
import { LoginComponent } from './@core/auth/login/login.component';

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
    { path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
