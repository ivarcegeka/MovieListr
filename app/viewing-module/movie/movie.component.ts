import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie-component.html',
    styleUrls: ['movie.css']
})
export class Movie {

    @Input() movie: string;
}