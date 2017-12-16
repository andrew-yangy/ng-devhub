import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { SharedModule } from "../../shared/shared.module";
import { GithubComponent } from "./github.component";
import { RankingComponent } from "./ranking/ranking.component";
import { RepoComponent } from "./ranking/repo/repo.component";
import { DevComponent } from "./ranking/dev/dev.component";

@NgModule({
  imports: [SharedModule, ThemeModule],
  declarations: [GithubComponent, RankingComponent, RepoComponent, DevComponent],
  exports: []
})
export class GithubModule {}
