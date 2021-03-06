/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';


let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


console.log('WTF?!');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movieName = prompt('Один из последних просмотренных фильмов?', '');
        let movieRating = prompt('На сколько оцените его?', '');
        if (movieName != null && movieName != null && movieName.length < 50 && movieName.length < 50 && movieName != '' && movieName != '') {
            personalMovieDB.movies[movieName] = movieRating;
        } else {
            i--;
            continue;
        }
    }
}

rememberMyFilms();


function showMyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    } else {
        console.log('Access error');
    }
}

function setFavoriteGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i]=prompt(`Ваш #${i+1} любимый жанр: `, '');
    }
}

setFavoriteGenres();

console.log(personalMovieDB);