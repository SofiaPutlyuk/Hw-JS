/*Task 1 */
let temperatureCelsius = 20;
let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
console.log(temperatureFahrenheit);
/*Task 2 */
let daysInMonth = 30;
let hoursInDay = 24;
let minutesInHour = 60;
let totalHours = daysInMonth * hoursInDay;
let totalMinutes = totalHours * minutesInHour;
console.log(totalMinutes, totalHours);

/*Task 3 */
const playerHealth = 100;
const playerEnergy = 50;
const newPlayerHealth = playerHealth - 10;
const newPlayerEnergy = playerEnergy - 10;
console.log(newPlayerHealth, newPlayerEnergy);

/*Task 4 */
const purchaseAmount = 1000;
let discount = purchaseAmount * 0.1;
let discountedAmount = purchaseAmount - discount;
console.log(discountedAmount);
/*Task 5 */
let floatingNumber = 3.7;
let roundedNumber = Math.floor(floatingNumber);
console.log(roundedNumber);
/*Task 6 */
let floatString = "3.14";
let floatNumber = parseFloat(floatString);
console.log(floatNumber);
/*Task 7 */
let intString = "42";
let intNumber = parseInt(intString);
console.log(intNumber);
/*Task 8 */
let number = 16;
let squareRoot = Math.sqrt(number);
console.log(squareRoot);
/*Task 9 */
let integerNumber = 42;
let stringNumber = "123";
let parsedNumber = parseInt(stringNumber);
console.log(parsedNumber);
let numberToString = integerNumber.toString();
console.log(numberToString);
