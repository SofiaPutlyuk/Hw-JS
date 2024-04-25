/*Task1*/
const num = [1, 2, 3];
num[1] = 10;
console.log(num[1]);
console.log(num);
/*Task 2 */
const fruits = ['Orange', 'Banana', 'Grape'];
fruits.push('Apple')
console.log(fruits)
/*Task 3 */
const number = [2, 8, 1]
let total = 0
for (let i = 0; i < number.length; i++) {
    total += number[i]
}
console.log(total)
/*Task 4 */
const numeral = [1, 2, 3, 4, 5]
for (let i = 0; i < numeral.length; i += 1) {
    console.log(numeral[i])
}
/*Task 5 */
const numbers = ['Pen', 'Marker', 'Pencilbox', 'Scissors', 'Eraser']
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].length > 5) {
        console.log(numbers[i])
    }
}
/*Task 6 */
const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = digit[0];
for (let i = 0; i < digit.length; i++) {
    let amount = digit[i]
    if (amount > max) {
        max = amount;
    }

}
console.log(max)



/*Task 7 */
const numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numeric.length; i++) {
    if (numeric[i] % 2 === 0) {
        console.log(numeric[i])
    }
}




