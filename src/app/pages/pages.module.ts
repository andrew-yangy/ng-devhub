import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { GithubModule } from './github/github.module';


@NgModule({
    imports: [
        SharedModule,
        ThemeModule,
		PagesRoutingModule,
		GithubModule
    ],
    declarations: [
        PagesComponent
    ],
})
export class PagesModule {
}
