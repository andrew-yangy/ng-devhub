import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';


@NgModule({
    imports: [
        SharedModule,
        ThemeModule,
        PagesRoutingModule
    ],
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
})
export class PagesModule {
}
