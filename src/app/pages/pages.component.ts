import { Component, OnInit } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";
import { MenuService } from "../@core/data/menu.service";

@Component({
  selector: "page-layout",
  template: `
    <dh-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </dh-layout>
  `
})
export class PagesComponent implements OnInit {
  menu: NbMenuItem[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }
}
