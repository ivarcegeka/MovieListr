import {Component} from "@angular/core";
import {MovieService} from "../../db-module/movie.service";

@Component({
    moduleId: module.id,
    selector: 'movie-list',
    templateUrl: 'movielist-component.html',
    styleUrls: ['movielist.css'],
    providers: [MovieService]
})
export class MovieList {

    public movies;

    constructor(private movieService: MovieService) {
        movieService
            .getMovies()
            .then((data) => {
                this.movies = data.movies;
            });
    }

}