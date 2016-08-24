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
var router_1 = require("@angular/router");
var movie_service_1 = require("../../db-module/movie.service");
var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(route, movieService, router) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            var selectedId = params['id'];
            _this.movie = _this.movieService.getMovie(selectedId);
        });
    };
    MovieDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'display-movie-details',
            templateUrl: 'movie-details-component.html',
            styleUrls: ['movie-details.css'],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, movie_service_1.MovieService, router_1.Router])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());
exports.MovieDetailsComponent = MovieDetailsComponent;
//# sourceMappingURL=movie-details.component.js.map