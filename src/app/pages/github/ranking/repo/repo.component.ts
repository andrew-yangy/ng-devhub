import { Component, OnInit, Input, HostListener } from "@angular/core";
import { ColorService } from "../../../../@core/data/color.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
	selector: "repo-item",
	templateUrl: "./repo.component.html",
	styleUrls: ["./repo.component.scss"]
})
export class RepoComponent implements OnInit {
	@Input() repo: any;
	color: string;
	contributors: any[];
	@HostListener('click')
	onClick() {
	 	window.open(this.repo.html_url);
	}

	constructor(
		private http: HttpClient,
		private colorService: ColorService,
		private router: Router) {}

	ngOnInit() {
		this.color = this.colorService.getLangColor(this.repo.language);
		this.getContributors();
	}
	getContributors() {
		this.http.get(this.repo.contributors_url)
			.map((res: any[]) => res.slice(0, 5))
			.subscribe((contributors: any[]) => this.contributors = contributors);
	}
}
