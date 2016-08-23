"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_service_1 = require("../../db-module/movie.service");
var router_1 = require("@angular/router");
var MovieDetails = (function () {
    function MovieDetails(route, movieService, router) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
    }
    MovieDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            var selectedId = params['id'];
            _this.movieService
                .getMovie(selectedId)
                .then(function (data) {
                if (data.movies.length > 0) {
                    _this.movie = data.movies[0];
                }
                else {
                    _this.error = true;
                }
            });
        });
    };
    MovieDetails.prototype.deleteMovie = function (movie) {
        var _this = this;
        this.movieService
            .deleteMovie(movie)
            .then(function () {
            _this.router.navigateByUrl('/movies');
        });
    };
    MovieDetails.prototype.getStarArray = function (rating) {
        var result = Array(rating).fill(true);
        var nrOfEmptyStars = 10 - rating;
        for (var i = 0; i < nrOfEmptyStars; i++) {
            result.push(false);
        }
        return result;
    };
    MovieDetails = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movie-details',
            templateUrl: 'moviedetails-component.html',
            styleUrls: ['moviedetails.css'],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, movie_service_1.MovieService, router_1.Router])
    ], MovieDetails);
    return MovieDetails;
}());
exports.MovieDetails = MovieDetails;
//# sourceMappingURL=moviedetails.component.js.map