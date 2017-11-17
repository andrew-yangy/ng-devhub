import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth-layout',
    styleUrls: ['./auth-layout.component.scss'],
    template: `
        <nb-layout>
            <nb-layout-column>
                <nb-card>
                    <nb-card-body>
                        <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12">
                            <ng-content></ng-content>
                        </div>
                    </nb-card-body>
                </nb-card>
            </nb-layout-column>
        </nb-layout>
    `,

})
export class AuthLayoutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
