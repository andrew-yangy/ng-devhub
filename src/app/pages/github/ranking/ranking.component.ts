import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../../@core/services/github.service";

@Component({
  selector: "dh-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
  repos: any[];
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getRepos().subscribe((repos: any[]) => {
      console.log(repos);
      this.repos = repos.items;
    });
  }
}
