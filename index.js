/*Task 1 */
const sum = Number(prompt("Введіть суму:"))
const bankAccount = {
    ownerName: "Marichka",
    accountNumber: 3,
    balance: 4000,
    deposit(sum) {
        let quantity = bankAccount.balance + sum
        console.log(quantity)
    },
    withdraw(sum) {
        let amount = bankAccount.balance - sum
        console.log(amount)
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
        if (degrees < weather.temperature) {
            return true;
        }
        if (degrees > weather.temperature) {
            return false;
        }
    },

}
weather.climate(degrees)
/*Task 3 */
const communication = prompt("Введіть електрону пошту :")
const codeword = prompt("Введіть пароль: ")
const user = {
    name: "Sophia",
    email: " ",
    password: " ",
    login(communication) {
        if (communication.includes("@gmail.com")) {
            this.email = communication
        }
        if (this.password.length >= 4 && this.password.length <= 16) {
            this.password = codeword
        }
    },
}
user.login(communication)
console.log(user)
/*Task 4 */
const movie = {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    rating: 8.2,
    grading() {
        if (movie.rating > 8) {
            return true;
        }
        if (movie.rating < 8) {
            return false;
        }
        if (movie.rating > 8) {
            alert("Крутий фільм")
        }
    }
}
movie.grading()
console.log(`Title : ${movie.title}`)
console.log(`Director : ${movie.director}`)
console.log(`Year : ${movie.year}`)
console.log(`Rating : ${movie.rating}`)