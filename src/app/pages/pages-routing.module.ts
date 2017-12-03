import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: '',
            redirectTo: 'github',
            pathMatch: 'full'
        },
        {
            path: 'github',
            component: GithubComponent,
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
