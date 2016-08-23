import {Routes, RouterModule} from "@angular/router";
import {MovieList} from "./viewing-module/movielist/movielist.component";
import {PageNotFoundComponent} from "./main-module/pagenotfound/pagenotfound.component";
import {EditForm} from "./editing-module/editform/editform.component";
import {MovieDetails} from "./viewing-module/moviedetails/moviedetails.component";

const appRoutes: Routes = [
    {path: '', component: MovieList},
    {path: 'movies', component: MovieList},
    {path: 'details/:id', component: MovieDetails},
    {path: 'add', component: EditForm},
    {path: 'edit/:id', component: EditForm},
    {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
