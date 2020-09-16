/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...') {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}

Cartoon.prototype.getDescription = function () {
  return Object.entries(this);
};

Cartoon.prototype.play = function () {
  return [
    this.studio,
    this.title,
    this.forChildren,
    this.beginning,
    this.studioLogo = '',
  ].join('\n');
};

/**
 * Мульт студии Walt Disney.
 */
function DisneyCartoon(title, year, forChildren = true, beginning = "Long, long ago in a faraway land...", studioLogo) {
  Cartoon.call(this, title, year, true, beginning, studioLogo);
  this.studio = 'Walt Disney';
  this.studioLogo = '🏰🌠';
  this.forChildren = forChildren;
  this.beginning = beginning;
}

DisneyCartoon.prototype = Object.create(Cartoon.prototype);
DisneyCartoon.prototype.constructor = DisneyCartoon;

let disneyCartoon = new DisneyCartoon('title', 1989, begining = 'Naaaaaaaaants ingonyaaaaaaama bagithi Baba...');

/**
 * Мульт студии DreamWorks.
 */
function DreamWorksCartoon(title, year, forChildren, beginning='Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend...', studioLogo) {
  Cartoon.call(this, title, year, true, beginning, studioLogo);
  this.forChildren = forChildren;
  this.studio = 'DreamWorks';
  this.studioLogo = '🌙';
  this.begining = beginning;
}
DreamWorksCartoon.prototype = Object.create(Cartoon.prototype);
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;
