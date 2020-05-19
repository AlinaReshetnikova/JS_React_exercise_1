const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = promrt('На сколько его оцените?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = promrt('На сколько его оценита?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d; 
// далее мы автомотизировали этот шаг с помощью цикла
 
for (let i=0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько его оцените?', '');

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    alert("Ошибочка вышла(");
}

console.log(personalMovieDB);
