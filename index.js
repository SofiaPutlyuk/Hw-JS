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
max = Math.max(max, modification[i].length)


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
const ask = prompt("Введіть число:")
let input = ask;
const numbers = [] + input;
function add(numbers){
for(let i = 0 ; i <numbers.length;i++){
total = numbers[i].length
alert("Загальна сума чисел " + total)
}
}
add(numbers)

/*Task 7*/
function isLoginValid(login) {
let m = login.length
if(m >= 4 && m <= 16){
console.log(true)
} else {
    console.log(false)
}

}
allLogins = []
function isLoginUnique(allLogins, login) {

}
/*Перевіряйте поки що до 5 , 6 , 7 зроблю трішки пізніше через те що я не дуже розумію ці 2 останні завдання */