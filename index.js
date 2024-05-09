/*Task 1 */
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false
const keys = Object.keys(user)
for (let key of keys) {
  console.log('Key:', key)
}
/*Task 2 */

const countProps = function (obj) {
  const keys = Object.keys(obj)
  return keys.length;

};


console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
/*Task 3 */
const findBestEmployee = function (employees) {
  const value = Object.values(employees)
  const digit = Math.max(...value)
  console.log(digit)
  for (let key in employees) {
    if (employees[key] === digit) {
      console.log("Найкращий працівник:", key);
      return key;
    }
  }

};


/* Викличи функції для перевірки працездатності твоєї реалізації.*/

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux*/
/*Task 4*/
const countTotalSalary = function (employees) {
  const values = Object.values(employees)
  let total = 0
  for (let elem of values) {
    total += elem

  }
  return total;
};


console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
/*Task 5 */
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let newArr = [];

  for (let elem of arr) {
    console.log(elem)
    newArr.push(elem[prop])

  }
  return newArr;


}




/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
 
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
 
console.log(getAllPropValues(products, 'category')); // []
/*Task 6 */
const productsAmount = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let total = 0;
  for (let elem of allProdcuts) {
    console.log(elem)
    if (elem.name === productName) {
      total = elem.price * elem.quantity
      console.log(total)
    }

  }
  return total;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 
console.log(calculateTotalPrice(productsAmount, 'Радар')); // 5200
 
console.log(calculateTotalPrice(productsAmount, 'Дроїд')); // 2800*/