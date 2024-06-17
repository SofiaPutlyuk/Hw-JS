
/*Task 1 */
function Account({ login, email }) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function() {
    return `Login: ${this.login}, Email: ${this.email}`;
};
console.log(Account.prototype.getInfo);
const mangoInfo = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
const polyInfo = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
   });
console.log(mangoInfo.getInfo()); 
console.log(polyInfo.getInfo()); 


/*Task 2 */
class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }
}
const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});
console.log(mango.getInfo())
const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});
console.log(poly.getInfo())
/*Task 3 */
class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(element => element !== item);

    }
}


const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items);
storage.addItem('Дроїд');
console.table(storage.items);
storage.removeItem('Пролонгер');
console.table(storage.items);
/*Task 4 */
class StringBuilder {
    constructor(value) {
        this._value = value
    }
    get value() {
        return this._value;
    }
    append(str) {
        this._value = str + this._value
        return this._value;
    }
    prepend(str) {
        this._value = this._value + str;
        return this._value;
    }
    pad(str) {
        this._value = str + this._value + str;
        return this._value;
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
/*Task 5 */
class Car {
static getSpecs(car){
console.log(` maxSpeed:${car.maxSpeed},speed:${car.speed},isOn:${car.isOn},distance:${car.distance},price:${car.price}`)
}
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
   
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     * speed - поточна швидкість, початкова 0
     * price - ціна автомобіля
     * maxSpeed - максимальна швидкість
     * isOn - заведений автомобіль, значення true або false. Спочатку false
     * distance - загальний кілометраж, спочатку 0
     */
    #price;
    constructor({price,maxSpeed}) {
    this.speed = 0;
    this.#price=price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
    }
   
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
     get price(){
     return this.#price;
     }
     set price(newPrice){
     return this.#price = newPrice;
     }
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn = true;
    }
   
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed=0;
    }
   
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
    const speedNew =this.speed + value
     if(speedNew > this.maxSpeed){
        this.speed = speedNew;
     } else{
        this.speed = this.maxSpeed;
     }
    }
   
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
    const speedNew = this.speed - value;
    if(speedNew >= 0){
    this.speed = speedNew;
     } else {
        this.speed =0;
     }
    }
   
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
   if(this.turnOn){
   this.distance += hours * this.speed 
   }
    }
   }
   
   const mustang = new Car({ maxSpeed: 200, price: 2000 });
   
   mustang.turnOn();
   mustang.accelerate(50);
   mustang.drive(2);
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
   
   mustang.decelerate(20);
   mustang.drive(1);
   mustang.turnOff();
   
   Car.getSpecs(mustang);
   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
   
   console.log(mustang.price); // 2000
   mustang.price = 4000;
   console.log(mustang.price); // 4000