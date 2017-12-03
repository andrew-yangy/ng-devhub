import { Component, OnDestroy } from "@angular/core";
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from "@nebular/theme";

import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/delay";
import { StateService } from "../../@core/data/state.service";
import { UserService } from "../../@core/data/users.service";

@Component({
  selector: "dh-layout",
  styleUrls: ["./layout.component.scss"],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header [position]="position"></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive
                   [right]="sidebar.id === 'right'">
        <nb-sidebar-header>
            <nb-user [picture]="user.picture" [name]="user.name" [title]="user.title" size="large"></nb-user>
        </nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="main-content">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

      <nb-sidebar class="settings-sidebar"
                   tag="settings-sidebar"
                   state="collapsed"
                   fixed
                   [right]="sidebar.id !== 'right'">
        <ngx-theme-settings></ngx-theme-settings>
      </nb-sidebar>
    </nb-layout>
  `
})
export class LayoutComponent implements OnDestroy {
  user: any = {};
  layout: any = {};
  sidebar: any = {};
  get position(): string {
    return this.sidebar.id === "left" ? "normal" : "inverse";
  }

  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;
  protected menuClick$: Subscription;

  constructor(
    protected stateService: StateService,
    protected userService: UserService,
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService
  ) {
    this.userService
      .getCurrentUser()
      .subscribe((user: any) => (this.user = user));
    this.layoutState$ = this.stateService
      .onLayoutState()
      .subscribe((layout: string) => (this.layout = layout));

    this.sidebarState$ = this.stateService
      .onSidebarState()
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar;
      });

    const isBp = this.bpService.getByName("is");
    this.menuClick$ = this.menuService
      .onItemSelect()
      .withLatestFrom(this.themeService.onMediaQueryChange())
      .delay(20)
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {
          if (bpTo.width <= isBp.width) {
            this.sidebarService.collapse("menu-sidebar");
          }
        }
      );
  }

  ngOnDestroy() {
    this.layoutState$.unsubscribe();
    this.sidebarState$.unsubscribe();
    this.menuClick$.unsubscribe();
  }
}
