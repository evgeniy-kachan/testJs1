// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for. Выведите на страницу в .out-1 формате значение+пробел.

const a1 = [5,7,9, 11, 13, 15];
function f1() {
    for(i = 0; i<a1.length; i++){
        document.querySelector('.out-1').innerHTML += a1[i]+' ';
    }
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

const a2 = [5,7,9, 11, 13, 15];

function f2() {
for(i = 0; i<a2.length; i++){
    document.querySelector('.out-2').innerHTML += i+' '+a2[i]+' ';
}
}

document.querySelector('.b-2').addEventListener('click', f2);


// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.


function f3() {
let div3 = document.getElementsByClassName('out-3');
for(i = 0; i<div3.length; i++){
    div3[i].innerHTML = 3;
}
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.


function f4() {
    let div4 = document.querySelectorAll('.out-4');
    for(i = 0; i<div4.length; i++){
        div4[i].innerHTML+= 4;
        //div4[i].append(4);
    }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна: 1. Получить все div.out-5 со страницы в массив a5. 2. Cоздать новые div.out-5 через createElement. Добавить с помощью push созданный div в массив a5.
// Поскольку для коллекций push запрещен - то данная операция должна вызывать ошибку. Убедитесь в этом. Чтобы экранировать ошибку и не дать ей влиять на работу документа в целом, применим try, catch.

function f5() {
    let a5 = document.querySelectorAll('.out-5');
    let newDiv = document.createElement('div');
    try {
        a5.push(newDiv);

    }
    catch(error) {
        // если будет ошибка - то просто сообщим об этом в консоль, но код продолжит работать
        console.log(error);
    }
    console.log('already work');
}

document.querySelector('.b-5').addEventListener('click', f5);

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1, 2], [3, 4], [5, 6]];
let newA6 = [];
let out = '';
function f6() {
    for (i = 0; i < a6.length; i++) {
        for (k = 0; k < a6[i].length; k++) {
            newA6.push(a6[i][k]);
        }
    } 
    for(i = 0; i < newA6.length; i++){
      out += newA6[i]+' ';
    }
    document.querySelector('.out-6').innerHTML = out;
    console.log(newA6);
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}

let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f7() {
    let a77 = {};
    for (i = 0; i < a7.length; i++) {
        a77[a7[i].id] = a7[i].name;
        
    }
    a7 = a77;

    console.log(a7);
}

document.querySelector('.b-7').addEventListener('click', f7);


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [ 23, 45].

let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let a8_2 = [];
    for (i = 0; i < a8.length; i++){
        a8_2[i] = a8[i]['id'];
    }
    a8 = a8_2;
    console.log(a8);
}
document.querySelector('.b-8').addEventListener('click', f8);

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна выводить в out-9 самый большой индекс вложенных массивов в массив a9. В данном случае это 4.

let a9 = [ [4,3,2] , [2,5],  [0,0,0,0,0]];

function f9() {
    
    for (let i = 0; i < a9.length; i++) {
        let max = a9.length;
        if (a9[i].length > max) {
            max = a9[i].length;
        }
        a9_res = max - 1;
        
    }document.querySelector('.out-9').innerHTML = a9_res;
    
}
document.querySelector('.b-9').addEventListener('click', f9);

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let a10_2 = {};
    for (let i = 0; i < a10.length; i++) {
        a10_2[a10[i]] = a10[i];
    }
    a10 = a10_2
    return a10;
}
document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
for(k in a11){
    if(a11[k]>10){
        document.querySelector('.out-11').innerHTML+=a11[k]+' ';
    }
}
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];

function f12() {
for(item of a12){
    document.querySelector('.out-12').innerHTML += item+' ';
}
}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символам в out-13 через пробел.

let a13 = 'testone';

function f13() {
    for(item of a13){
        document.querySelector('.out-13').innerHTML += item+' ';
    }
}

document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4,5,6]);

function f14() {
    for(item of a14){
        document.querySelector('.out-14').innerHTML += item +' ';
    }
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).



function f15() {
    let div15 = document.querySelectorAll('.out-15');
    for (let item of div15) {
        item.innerHTML = 15;

    }
}

document.querySelector('.b-15').addEventListener('click', f15);