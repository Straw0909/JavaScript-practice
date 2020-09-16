/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  watchedMovies.toString = function () {
    return this.map((film, i) => `${i + 1}. ${film.title}`).join('')
  }
}
Person.prototype.watchMovie = function (movie) {
  movie.play()
  if (!this.watchedMovies.includes(movie)) {
    this.watchedMovies.push(movie);
  }
};
