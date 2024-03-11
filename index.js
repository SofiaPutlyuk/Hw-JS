/*Task1**/
const inputName = prompt("Введіть ім'я:");
const inputAge = prompt("Введіть вік:");
const checkButton = confirm("Пітвердити?");
if (inputName || inputAge){
    console.log("Обидва поля заповнені")
} else {
    console.log("Не всі поля заповнені")
}
/*Task 2 */
const age = parseInt(prompt("Введіть цифру :"))
const age2 = parseInt(prompt("Введіть цифру :"))
const age3 = (age && age2 >= 10)
if (age3 ){
  alert("Сума більша за 10")  
} else {
    alert("Сума менша 10")
}
/*Task3 */
const textCorrect = prompt("Введіть слово:")
const checkText = confirm("Пітвердити?")
if(textCorrect === "JavaScript"){
    alert("Текст містить слово JavaScript")
}else {
    alert("Текст не містить слово JavaScript")
}
/*Task 4 */
const gameAge = prompt("Введіть вік :")
const gameAge2 = prompt("Введіть вік :")
const gameAge3 = (gameAge || gameAge2 >= 10<20)
if (gameAge3){
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20")
}
/*Поясніть як правильно записати , бо я це завдання не дуже зрозуміла */
/*Task 5*/
const name = "John"; 
const email = "john@example.com"; 
const password = "password123"; 

const isNameValid = name.length >= 3;
const isEmailValid = email.includes('@') && email.includes('.');
const isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
   window.location.href = "інша_сторінка.html";
} else {
    alert("Помилка! Перевірте правильність заповнення полів.");
}
