import { Component, OnInit, Input, HostListener } from "@angular/core";

@Component({
	selector: "dev-item",
	templateUrl: "./dev.component.html",
	styleUrls: ["./dev.component.css"]
})
export class DevComponent implements OnInit {
	@Input() dev: any;
	@HostListener('click')
	onClick() {
	 	window.open(this.dev.html_url);
	}
	constructor() {}

	ngOnInit() {
		console.log(this.dev)
	}
}
