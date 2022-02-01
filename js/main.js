// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
//     Скласти результат цих чисел в змінній result.

let arr = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]

let result = 0;
function count() {
    for(let i=0; i<arr.length; i++ ) {
        result += arr[i]
    }
}
count();
console.log(`Result = ${result}`);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'JS',
    pages: 900,
    genre: 'Programming'
};
console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    name: 'JS',
    pages: 900,
    genre: 'Programming',
    author: 'Brendan Eich'
};
console.log(book2);

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт.

let arrBook = [
    {
        title: 'Book1',
        name: 'JS',
        pages: 900,
        genre: 'Programming',
        author: 'Brendan Eich'
    },
    {
        title: 'Book2',
        name: 'HTML',
        pages: 900,
        genre: 'Hyper Text',
        author: 'Elizabeth Robson'
    }
];
console.log('Book1 = ', arrBook[0]);
console.log('Book2 = ', arrBook[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23,
    width = 10;
let sqrt = width * height;
console.log(`Square = ${sqrt}(см2)`);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
const PI = 3.14;
let v = (dC**2/4)*PI*heightC;
console.log((`Об'єм = ${v}(см3)`));

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).

let n = 3,
    m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
console.log(`Гіпотенуза = ${k}`);
// ----------------------------------------------------------------------------------------------------------