'use strict';

// все функциb перенесла в методы переменной personalMovieDB (обрати внимание на запись метода!!!)
// т к метод находится внутри функции, где переменная numberOfFilms уже создана, можно не выносить ее за пределы функции

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        } 
    },

        rememberMyFilms: function() {
        for (let i=0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько его оцените?', '');
        
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман!");
        } else {
            alert("Ошибочка вышла(");
        }
        // тут забахала стрелочную функция для разнообразия

    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Данные скрыты')
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt('Ваш любимый жанр под номером ' + i);
            if (genre === "" || genre == null) {
                console.log("ошибка или не введено ничего");
                i--;
            }  else {
            personalMovieDB.genres[i - 1] = genre;
            console.log(personalMovieDB.genres);
            }
        } 

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item} `);
        });
    }
    // далее необходимо после того, как введены жанры вывести все их пользователю, буду использовать колбэки
    

}