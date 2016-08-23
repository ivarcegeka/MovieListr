import {Injectable} from "@angular/core";
import * as PouchDB from "pouchdb";
import * as relationalPouch from "relational-pouch";


@Injectable()
export class MovieService {

    private MOVIE_SCHEMA = 'movie';

    private db;

    constructor() {
        this.db = new PouchDB('movies', {revs_limit: 1});
        PouchDB.plugin(relationalPouch);
        this.db.setSchema([
            { singular: 'movie', plural: 'movies'}
        ]);
    }

    getMovies() {
        return this.db.rel.find(this.MOVIE_SCHEMA);
    }

    getMovie(id) {
        return this.db.rel.find(this.MOVIE_SCHEMA, id);
    }

    saveMovie(movie) {
        return this.db.rel.save(this.MOVIE_SCHEMA, movie)
    }

    deleteMovie(movie) {
        return this.db.rel.del(this.MOVIE_SCHEMA, movie);
    }

}