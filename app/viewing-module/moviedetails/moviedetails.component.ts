import {Component, OnInit} from "@angular/core";
import {MovieService} from "../../db-module/movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'movie-details',
    templateUrl: 'moviedetails-component.html',
    styleUrls: ['moviedetails.css'],
    providers: [MovieService]
})
export class MovieDetails implements OnInit {

    public movie;
    public error;

    constructor(private route: ActivatedRoute,
                private movieService: MovieService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route
            .params
            .subscribe(params => {
                let selectedId = params['id'];
                this.movieService
                    .getMovie(selectedId)
                    .then((data) => {
                        if (data.movies.length > 0) {
                            this.movie = data.movies[0];
                        } else {
                            this.error = true;
                        }
                    });
            });
    }

    public deleteMovie(movie) {
        this.movieService
            .deleteMovie(movie)
            .then(() => {
                this.router.navigateByUrl('/movies');
            });
    }

    public getStarArray(rating) {
        var result = Array(rating).fill(true);
        var nrOfEmptyStars = 10 - rating;
        for (let i = 0; i < nrOfEmptyStars; i++) {
            result.push(false);
        }
        return result;
    }

}