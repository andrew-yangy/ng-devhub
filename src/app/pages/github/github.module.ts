import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { SharedModule } from "../../shared/shared.module";
import { GithubComponent } from "./github.component";
import { RankingComponent } from "./ranking/ranking.component";

@NgModule({
  imports: [SharedModule, ThemeModule],
  declarations: [GithubComponent, RankingComponent],
  exports: []
})
export class GithubModule {}
