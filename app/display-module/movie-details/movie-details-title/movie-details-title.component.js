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
var movie_service_1 = require("../../../db-module/movie.service");
var movie_class_1 = require("../../../db-module/movie.class");
var router_1 = require("@angular/router");
var MovieDetailsTitleComponent = (function () {
    function MovieDetailsTitleComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    MovieDetailsTitleComponent.prototype.deleteMovie = function (movie) {
        var _this = this;
        this.movieService
            .deleteMovie(movie)
            .subscribe(null, function (error) { return console.log(error); }, function () { return _this.router.navigateByUrl('/movies'); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', movie_class_1.Movie)
    ], MovieDetailsTitleComponent.prototype, "movie", void 0);
    MovieDetailsTitleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'display-movie-details-title',
            templateUrl: 'movie-details-title-component.html',
            styleUrls: ['movie-details-title.css'],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.Router])
    ], MovieDetailsTitleComponent);
    return MovieDetailsTitleComponent;
}());
exports.MovieDetailsTitleComponent = MovieDetailsTitleComponent;
//# sourceMappingURL=movie-details-title.component.js.map