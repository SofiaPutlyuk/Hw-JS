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
 default : 
 alert("Ви неправильно обрали !")
}
/*Task 2 */
const day = prompt("Уведіть день тижня :")
switch (day) {
case "Monday" :
case "Tuesday" :
case "Wednesday" :
case "Thursday" :
case "Friday" :    
alert ("Робочий день")
break;
default :
alert ("Помилка!")

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
alert ("Помилка !");
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
default : 
alert("Помилка !")
}
/*Task 5*/
const color = prompt("Введіть колір :")
switch (color){
case "червоний": 
alert (` червоний - стоп`)
break ;
case "жовтий": 
alert (`жовтий - чекати`)
break ;
case "зелений": 
alert (`зелений - йти`)
break ;
} 
/*Task 6 */
const num1 = parseInt(prompt("Введіть цифру:"))
const num2 = parseInt(prompt("Введіть цифру:"))
const action = prompt("Введіть  дію:")
if(num2 === 0) {
 alert("Помилка !")
 }
let example ;
switch (action) {
case "+" : 
example = alert(num1 + num2);
break;
case "-" : 
example = alert(num1 - num2);
break;
case "*":
example = alert(num1 * num2);
break;
case "/":
example = alert(num1 / num2);
break;
}
