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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var db_module_1 = require("../db-module/db.module");
var movie_list_component_1 = require("./movie-list/movie-list.component");
var movie_list_item_component_1 = require("./movie-list/movie-list-item/movie-list-item.component");
var movie_details_component_1 = require("./movie-details/movie-details.component");
var movie_details_table_component_1 = require("./movie-details/movie-details-table/movie-details-table.component");
var movie_details_title_component_1 = require("./movie-details/movie-details-title/movie-details-title.component");
var DisplayModule = (function () {
    function DisplayModule() {
    }
    DisplayModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, db_module_1.DbModule, router_1.RouterModule],
            declarations: [movie_list_component_1.MovieListComponent, movie_list_item_component_1.MovieListItemComponent, movie_details_component_1.MovieDetailsComponent, movie_details_table_component_1.MovieDetailsTableComponent, movie_details_title_component_1.MovieDetailsTitleComponent],
            exports: [movie_list_component_1.MovieListComponent, movie_details_component_1.MovieDetailsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayModule);
    return DisplayModule;
}());
exports.DisplayModule = DisplayModule;
//# sourceMappingURL=display.module.js.map