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
var PouchDB = require("pouchdb");
var relationalPouch = require("relational-pouch");
var movie_class_1 = require("./movie.class");
var rxjs_1 = require("rxjs");
var MovieService = (function () {
    function MovieService() {
        this.MOVIE_SCHEMA = 'movie';
        this.db = new PouchDB('movies');
        PouchDB.plugin(relationalPouch);
        this.db.setSchema([
            { singular: 'movie', plural: 'movies' }
        ]);
    }
    MovieService.prototype.getMovies = function () {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.db
                .rel
                .find(_this.MOVIE_SCHEMA)
                .then(function (data) {
                observer.next(_this.mapToMovies(data.movies));
                observer.complete();
            }, function (error) {
                observer.error(error);
            });
        });
    };
    MovieService.prototype.getMovie = function (id) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.db
                .rel
                .find(_this.MOVIE_SCHEMA, id)
                .then(function (data) {
                observer.next(_this.mapToMovie(data.movies[0]));
                observer.complete();
            }, function (error) {
                observer.error(error);
            });
        });
    };
    MovieService.prototype.saveMovie = function (movie) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.db
                .rel
                .save(_this.MOVIE_SCHEMA, movie)
                .then(function (data) {
                observer.next(data);
                observer.complete();
            }, function (error) {
                observer.error(error);
            });
        });
    };
    MovieService.prototype.deleteMovie = function (movie) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.db
                .rel
                .del(_this.MOVIE_SCHEMA, movie)
                .then(function (data) { return observer.complete(); }, function (error) { return observer.error(error); });
        });
    };
    MovieService.prototype.mapToMovie = function (databaseRow) {
        return new movie_class_1.Movie(databaseRow.name, databaseRow.duration, databaseRow.rating, databaseRow.director, databaseRow.id, databaseRow.rev);
    };
    MovieService.prototype.mapToMovies = function (databaseRows) {
        var _this = this;
        var result = [];
        databaseRows.forEach(function (row) {
            result.push(_this.mapToMovie(row));
        });
        return result;
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map