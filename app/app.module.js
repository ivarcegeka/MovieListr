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
var platform_browser_1 = require("@angular/platform-browser");
var movielistr_component_1 = require("./main-module/movielistr/movielistr.component");
var viewing_module_1 = require("./viewing-module/viewing.module");
var app_routing_1 = require("./app.routing");
var main_module_1 = require("./main-module/main.module");
var editing_module_1 = require("./editing-module/editing.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [main_module_1.MainModule, platform_browser_1.BrowserModule, viewing_module_1.ViewingModule, editing_module_1.EditingModule, app_routing_1.routing],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [movielistr_component_1.MovieListr]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map