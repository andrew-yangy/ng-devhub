import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ThemeModule} from '../@theme/theme.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ThemeModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ThemeModule
    ]
})
export class SharedModule {
}
