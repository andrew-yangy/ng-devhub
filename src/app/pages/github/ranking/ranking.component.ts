import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../../@core/data/github.service";

@Component({
	selector: "dh-ranking",
	templateUrl: "./ranking.component.html",
	styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
	repos: any[];
	devs: any[];

	constructor(
		private githubService: GithubService
	) {}

	ngOnInit() {
		this.githubService.getTopRepos().subscribe((repos: any) => {
			console.log(repos);
			this.repos = repos.items;
		});
		this.githubService.getTopDevs().subscribe((devs: any) => {
			console.log(devs);
			this.devs = devs.items;
		});
	}
}
