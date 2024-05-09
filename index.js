/*Task 1 */
const sum = Number(prompt("Введіть суму:"))
const bankAccount = {
  ownerName: "Marichka",
  accountNumber: 3,
  balance: 4000,
  deposit(sum) {
    this.balance += sum
    console.log(this.balance)
  },
  withdraw(sum) {
    if (this.balance < sum) {
      console.log("Недостатньо коштів на рахунку")
    } else {
      this.balance -= sum
      console.log(this.balance)
    }
  },

}
bankAccount.deposit(sum)
bankAccount.withdraw(sum)
/*Task 2 */
const degrees = prompt("Введіть температуру")
const weather = {
  temperature: -15,
  humidity: 72,
  windSpeed: 23,
  climate(degrees) {
    return degrees < weather.temperature;
  },

}
weather.climate(degrees)
/*Task 3 */
const communication = prompt("Введіть електрону пошту :")
const codeword = prompt("Введіть пароль: ")
const user = {
  name: "Sophia",
  email: "test@gmail.com ",
  password: "test124",
  login(communication, codeword) {
    if (communication.includes("@gmail.com")) {
      this.email = communication
    } else {
      console.log("Введіть правильну електронну пошту")
    }
    if (communication == this.email && codeword == this.password) {
      this.password = codeword
    } else {
      console.log("Пароль повинен містити від 4 до 16 символів")
    }
  },
}
user.login(communication, codeword)
console.log(user)
/*Task 4 */
const movie = {
  title: "Avatar",
  director: "James Cameron",
  year: 2009,
  rating: 8.2,
  grading() {
    return movie.rating > 8;

  }
}
movie.grading()
console.log(`Title : ${movie.title}`)
console.log(`Director : ${movie.director}`)
console.log(`Year : ${movie.year}`)
console.log(`Rating : ${movie.rating}`)