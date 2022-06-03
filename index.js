//1 Отфильтруйте отрицательные элементы в массиве, оставив только положительные (+)

/*
let fillNumber1 = [10, -20, 5, 4, 9, -5, 2, 3, -13, 90, -16, 200, 400, 101, 7, 15, 75];

let task1 = fillNumber1.filter (function(element, index, arr){ // функция принимает три элемента 1 - ссылка на текущий эдлеменет, 2 - на индекс, 3 - на массив
    return element>0; // тут возвращаем правду или лож (элементы больше 0 если да то тогда выводим)
})
console.log(task1);
*/



//2 Найдите сумму элементов массива которые меньше 100 по значению (+)

/*
let fill2 = [10, -20, 5, 4, 9, -5, 2, 3, -13, 90, -16, 200, 400, 101, 7, 15, 75];
let task2 = fill2.filter(el=>el<100);
let result = task2.reduce((a,b) => a+b,sum)
console.log(result);
*/


//3 Уменьшите каждый элемент массива на 3% (+)

/*
let fill3 = [10, -20, 5, 4, 9, -5, 2, 3, -13, 90, -16, 200, 400, 101, 7, 15, 75];

let task3 = fill3.forEach((el,i,arr)=>fill3[i]-=(el*0.03));
console.log(fill3);
*/




//4 Если все элементы массива меньше 100 увеличьте их на 5%
let fill4 = [10, -20, 5, 4, 9, -5, 2, 3, -13, 90, -16, 200, 400, 101, 7, 15, 75];
let task4 = fill4.every(function(){

})
console.log(fill4);









//5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное") (+)

/*
let a = 'saippuakivikauppias'; 
let b = 'saippuak';

function fill5 (palindrome){
    palindrome === palindrome.split('').reverse().join('')
    ? console.log('Yes')
    : console.log('No')
}
fill5 (a), fill5 (b);
*/






//6 Соедините две строки в одну и переверните наоборот (+)
/*
let a = [1,2,3,4,5]; 
let b = [6,7,8,9,10];

let fill = a.concat(b);
console.log(fill);
let c = fill.reverse();
console.log(c);
*/


//7* Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.

let str = 'hello my name is vasya'; 

function upperCase (firstLetter){

}




function string() {
  let string = 'I am  the code';
  var splits = string.split(" ");
  var stringItog = "";

  for (let i = 0; i < splits.length; i++) {
    let Name = splits[i];
    let First = Name.substring(0, 1).toUpperCase();
    let Leftovers = Name.substring(1, Name.length)
    stringItog += First + Leftovers + " ";
  }

  console.log(stringItog)
}
string();





let str = 'hello my name is vasya'; 
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}
console.log(str);



// Измените первую букву каждого слова в верхний регистр
var str = "my name is wangyawei"
function changeFirstLetter(){
    // конвертировать в строковый массив
    var array = str.toLowerCase().split(" ")
    for(var i =0 ;i < array.length; i++){
        / / Re-назначить каждый элемент массива, поверните первую букву в верхнем регистре
        array[i]=array[i][0].toUpperCase()+array[i].substring(1,array[i].length)
    }
    var string = array.join(" ")
    return string
}
var resultStr = changeFirstLetter(str)
//console.log(resultStr)

// Используйте регулярные выражения
function titleize(str){
 // Если вы хотите только самые оригинальные функции скобок, но не будете ссылаться на него, то есть ни в API, и не в регулярном обращении.
 / / Вы можете использовать не захваченные скобки (?: P) и (?: P1 | P2 | P3)
 // Здесь здесь, что пустой символ, пространство, \ W - буквенно-цифровой = подчеркивание, вот письмо
 return str.toLowerCase().replace(/(?:^|\s)\w/g,function(c){
     return c.toUpperCase()
 })
}
var resultStr2 = titleize(str)
console.log(resultStr2)  //My Name Is Wangyawei






//8* Вывести индексы минимальных элементов массива

let a = [10, -20, 5, 4, 9, -5, 2, 3, -13, 90, -16, 200, 400, 101, 7, 15, 75];
function ()
