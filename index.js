/*Task1
const inputName = prompt("Введіть ім'я:");
const inputAge = prompt("Введіть вік:");
const checkButton = confirm("Пітвердити?");
if (inputName && inputAge){
    console.log("Обидва поля заповнені")
} else {
    console.log("Не всі поля заповнені")
}
/*Task 2 
const num = parseInt(prompt("Введіть цифру :"))
const num2 = parseInt(prompt("Введіть цифру :"))
const num3 = num + num2  
if (num3 >=10 ){
  alert("Сума більша за 10")  
} else {
    alert("Сума менша або дорівнює 10")
}
/*Task3 
const textCorrect = prompt("Введіть слово:")
const checkText = confirm("Пітвердити?")
if(textCorrect.includes("JavaScript") ){
    alert("Текст містить слово JavaScript")
}else {
    alert("Текст не містить слово JavaScript")
}
/*Task 4 */
const gameAge = parseInt(prompt("Введіть вік :"))
if (gameAge >= 10 && gameAge <= 20){
    alert("Число входить в діапазон від 10 до 20");
} else {
    alert("Число не входить в діапазон від 10 до 20")
}

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

