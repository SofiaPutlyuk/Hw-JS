/*Task 1 */
const  drink = confirm(`Кава - 1, Чай - 2  та Сік - 3.`)
const  select = prompt("Введіть цифру:")
switch(select) {
 case '1':
 alert ("Ви вибрали каву")
 break;
 case '2':
 alert("Ви вибрали чай")
 break;
 case '3':
 alert("Ви вибрали сік")
 break;
}
/*Task 2 */
const day = prompt("Уведіть день тижня :")
switch (day) {
case "Monday" :
alert ("Робочий день")
break;
case "Tuesday" :
alert ("Робочий день")
break;
case "Wednesday" :
 alert ("Робочий день")
 break;
 case "Thursday" :
 alert ("Робочий день")
 break;
 case "Friday" :
 alert ("Робочий день")
 break;
 default :
 alert ("Вихідний день")

}
/*Task 3 */
const month = prompt ("Введіть номер місяця:")
switch (month){
case "Березень" :
alert ("Весна")
break;
case "Червень" :
alert ("Літо")
break;
case "Вересень":
alert ("Осінь")
break;
default :
alert ("Інша пори року ");
}
/*Task 4 */
const numberDay = prompt("Введіт номер місяця :")
switch (numberDay) {
case "1" :
alert ("Цей день має 31 день")
break;
case "2" :
alert ("Цей день має 30 день")
break;
case "3" :
alert ("Цей день має 29 день")
break;

}
/*Task 5*/
const color = prompt("Введіть колір :")
switch (color){
case "червоний": 
alert (`якщо це червоний - стоп`)
break ;
case "жовтий": 
alert (`якщо це жовтий - чекати`)
break ;
case "зелений": 
alert (`якщо це жовтий - йти`)
break ;
} 
/*Task 6 */
const num1 = parseInt(prompt("Введіть цифру:"))
const num2 = parseInt(prompt("Введіть цифру:"))
const num3 = prompt("Введіть  дію:")
const num5 = confirm("Можливість ділення на нуль")
let num4 ;
switch (num3) {
case "+" : 
num4 = alert(num1 + num2);
break;
case "-" : 
num4 = alert(num1 - num2);
break;
case "*":
num4 = alert(num1 * num2);
break;
case "/":
num4 = alert(num1 / num2);
break;
}
