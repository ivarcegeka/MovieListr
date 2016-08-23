"use strict";
var router_1 = require("@angular/router");
var movielist_component_1 = require("./viewing-module/movielist/movielist.component");
var pagenotfound_component_1 = require("./main-module/pagenotfound/pagenotfound.component");
var editform_component_1 = require("./editing-module/editform/editform.component");
var moviedetails_component_1 = require("./viewing-module/moviedetails/moviedetails.component");
var appRoutes = [
    { path: '', component: movielist_component_1.MovieList },
    { path: 'movies', component: movielist_component_1.MovieList },
    { path: 'details/:id', component: moviedetails_component_1.MovieDetails },
    { path: 'add', component: editform_component_1.EditForm },
    { path: 'edit/:id', component: editform_component_1.EditForm },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map