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
var movie_class_1 = require("../../db-module/movie.class");
var movie_service_1 = require("../../db-module/movie.service");
var router_1 = require("@angular/router");
var EditForm = (function () {
    function EditForm(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
    }
    EditForm.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            var selectedId = params['id'];
            if (selectedId) {
                _this.movieService
                    .getMovie(selectedId)
                    .then(function (data) {
                    if (data.movies.length > 0) {
                        _this.model = data.movies[0];
                    }
                    else {
                        _this.error = true;
                    }
                });
            }
            else {
                _this.resetModel();
            }
        });
    };
    EditForm.prototype.resetModel = function () {
        this.model = new movie_class_1.Movie("", 0, 0, "");
    };
    EditForm.prototype.onSubmit = function () {
        this.movieService.saveMovie(this.model);
        this.router.navigateByUrl('');
    };
    EditForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'editform-component.html',
            styleUrls: ['editform.css'],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.Router, router_1.ActivatedRoute])
    ], EditForm);
    return EditForm;
}());
exports.EditForm = EditForm;
//# sourceMappingURL=editform.component.js.map