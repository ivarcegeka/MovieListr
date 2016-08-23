import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MovieListr} from "./main-module/movielistr/movielistr.component";
import {ViewingModule} from "./viewing-module/viewing.module";
import {routing, appRoutingProviders} from "./app.routing";
import {MainModule} from "./main-module/main.module";
import {EditingModule} from "./editing-module/editing.module";

@NgModule({
    imports: [MainModule, BrowserModule, ViewingModule, EditingModule, routing],
    providers: [appRoutingProviders],
    bootstrap: [MovieListr]
})
export class AppModule {
}
