"use strict";
var router_1 = require("@angular/router");
var movie_list_component_1 = require("./display-module/movie-list/movie-list.component");
var movie_details_component_1 = require("./display-module/movie-details/movie-details.component");
var edit_form_component_1 = require("./editing-module/editform/edit-form.component");
var pagenotfound_component_1 = require("./main-module/pagenotfound/pagenotfound.component");
var appRoutes = [
    { path: '', component: movie_list_component_1.MovieListComponent },
    { path: 'movies', component: movie_list_component_1.MovieListComponent },
    { path: 'details/:id', component: movie_details_component_1.MovieDetailsComponent },
    { path: 'add', component: edit_form_component_1.EditFormComponent },
    { path: 'edit/:id', component: edit_form_component_1.EditFormComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map