const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = promrt('На сколько его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = promrt('На сколько его оценита?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
 


