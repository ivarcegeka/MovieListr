import {NgModule} from "@angular/core";
import {Movie} from "./movie/movie.component";
import {MovieList} from "./movielist/movielist.component";
import {CommonModule} from "@angular/common";
import {DbModule} from "../db-module/db.module";
import {RouterModule} from "@angular/router";
import {MovieDetails} from "./moviedetails/moviedetails.component";

@NgModule({
    imports: [CommonModule, DbModule, RouterModule],
    declarations: [MovieList, Movie, MovieDetails],
    exports: [MovieList, MovieDetails]
})
export class ViewingModule {
}
