import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";
import {ActionBar} from "./actionbar/actionbar.component";
import {MovieListr} from "./movielistr/movielistr.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ActionBar, MovieListr, PageNotFoundComponent],
    exports: [MovieListr, PageNotFoundComponent]
})
export class MainModule {
}
