/*Task 1 */
const message = () => {
    console.log("Hello World!")
}
message()
/*Task 2 */
const guessField = prompt("Введть число:")
const guessNumber = Math.floor(Math.random() * 100) + 1
const checkGuess = (guessField , guessNumber) => {
    if (guessField >= 1 && guessField <= 100) {
      if (parseInt(guessField)===guessNumber){
        alert("Ви  вгадали")
      }
      
    } else {
        alert("Ви не вгадали")
    }
}
checkGuess(guessField)
/*Task 4 */
const applyCallbackToEachElement = (arr, callback) => {
    const sum = [];
    for (elem of arr) {
        const modification = callback(elem)
        sum.push(modification)

    }
    return sum;
}
const arr = [1, 2, 3, 4, 5];
const squareCallback = (total) => total * total;
const sum = applyCallbackToEachElement(arr, squareCallback);
console.log(sum);
/*Task 5 */
const calculateDiscountedPrice = (price, discount, callback) => {
    const total = price - (price * discount / 100)
    return callback(total);
}
const showDiscountedPrice = (amount) => {
    console.log(amount)
}

calculateDiscountedPrice(100, 10, showDiscountedPrice); 
