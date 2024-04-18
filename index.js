/*Task1*/
const array = ['Mango', 'Poly', 'Ajax'];
const logItems = function(array){
for(let i = 0; i < array.length; i++){
  let total = i +  1 + `-${array[i]}`
   console.log(total)
    }
}
logItems(array)

/*Task 2 */
message = "Hello World"
pricePerWord = 100;
function calculateEngravingPrice(message,pricePerWord ) {
 const form = message.split(" ")
 console.log(form)
 const measure = form.length
 console.log(measure)

const total = measure * pricePerWord
console.log(total)
    }
calculateEngravingPrice(message, pricePerWord)
/*Task 3 */
const stringAsk = "what's your favourite color ?";
 

function findLongestWord(stringAsk) {

const modification  = stringAsk.split(" ")
let max = 0;
for(let i = 0; i < modification.length;i++){
all = modification[i] +`-`+ modification[i].length
console.log(all)
max = Math.max(max, modification[i].length )


}
console.log(max)
}
findLongestWord(stringAsk)
    
/*Task 4*/
 const string = prompt("Введіть рядок :")
 console.log(string.length)
 function formatString(string){
 if (string.length < 40){
 alert(string)  ;
 }
 if (string.length > 40){
 alert (string.slice(0,40) + `...`)
 }
 }
 formatString(string)
 /*Task 5 */
 message = " spam is'nt good   "
 function checkForSpam(message) {
  if(message.includes("sale") || message.includes("spam")){
   return true ;
  } else {
    return false ;
  }
}
checkForSpam(message)
/*Task 6 */

const numbers = [];
let total = 0;
function add(){
while(true) {
let input = prompt("Введіть число:")
if (input === null) {
  break;
}
  
}
for(let i =0 ; i < numbers.length;i++){
total += numbers[i]

}
if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
} 
}
add()
/*Task 7*/
const logins = ['Mango','Ajax','Poly','wexter','skewler']
const login = prompt("Введіть рядок")
function isLoginValid(login){
  
  if (login.length >= 4 && login.length <= 16){
    return true;
} 
return false;
}
isLoginValid(login)
const allLogins = ['nikvan','rainyday','anana']

function isLoginUnique(allLogins, login) {
if (!allLogins.includes(login)){
return true;
}
return false;
}
isLoginUnique(allLogins,'nikvan')

function addLogin(allLogins, login) {
  allLogins.push(login)

 if(!isLoginValid(login)){
  console.log('Помилка! Логін повинен бути від 4 до 16 символів')
 }  
 
 else if (!isLoginUnique(login)){
  console.log('Такий логін уже використовується!')
 } else {
  allLogins.push(login)
  console.log("Логін успішно доданий!")
 }
}
addLogin(allLogins, 'rainyday')