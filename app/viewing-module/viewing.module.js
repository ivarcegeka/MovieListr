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
var movie_component_1 = require("./movie/movie.component");
var movielist_component_1 = require("./movielist/movielist.component");
var common_1 = require("@angular/common");
var db_module_1 = require("../db-module/db.module");
var router_1 = require("@angular/router");
var moviedetails_component_1 = require("./moviedetails/moviedetails.component");
var ViewingModule = (function () {
    function ViewingModule() {
    }
    ViewingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, db_module_1.DbModule, router_1.RouterModule],
            declarations: [movielist_component_1.MovieList, movie_component_1.Movie, moviedetails_component_1.MovieDetails],
            exports: [movielist_component_1.MovieList, moviedetails_component_1.MovieDetails]
        }), 
        __metadata('design:paramtypes', [])
    ], ViewingModule);
    return ViewingModule;
}());
exports.ViewingModule = ViewingModule;
//# sourceMappingURL=viewing.module.js.map