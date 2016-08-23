"use strict";
var Movie = (function () {
    function Movie(name, duration, rating, director) {
        this.name = name;
        this.duration = duration;
        this.rating = rating;
        this.director = director;
        this.type = 'movie';
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.class.js.map