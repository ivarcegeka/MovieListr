"use strict";
var Movie = (function () {
    function Movie(name, duration, rating, director, id, rev) {
        this.name = name;
        this.duration = duration;
        this.rating = rating;
        this.director = director;
        this.id = id;
        this.rev = rev;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.class.js.map