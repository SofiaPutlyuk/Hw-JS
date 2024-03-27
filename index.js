/*Task1*/
const num = [1,2,3];
num[1]=10;
console.log(num[1]);
console.log(num);
/*Task 2 */
const fruits = ['Orange','Banana','Grape'];
fruits[3]= 'Apple';
console.log(fruits[3]);
console.log(fruits)
/*Task 3 */
const number = [2,8,1]
console.log(number[0] + number[1] + number[2])

/*Task 4 */
const numeral = [1,2,3,4,5]
for(let i = 0 ; i < numeral; i += 1){
console.log(numeral[i])
}
/*Task 5 */ 
const numbers = ['Pen','Marker','Pencilbox','Scissors','Eraser']
for (let i =0 ; i< numbers.length; i++){
 if (numbers[i].length > 5){
 console.log(numbers[i])
 }
}
/*Task 6 */
const digit =[1,2,3,4,5,6,7,8,9,10];
const maxValue = Math.max.apply(null,digit)
console.log(maxValue)
/*Я використала null для того щоб не було безкінечність*/
/*Task 7 */
const numeric = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ; i < numeric.length; i++ ){
if (numeric[i]%2 === 0){
console.log(numeric[i])
}
}