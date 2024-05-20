/*Task 1 */
/*1.1*/
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  let{name,age,hobby:userHobby='skydiving',premium:userChoice=false}=user
  console.log(name,age,userHobby,userChoice)

/* 1.2 */
const countProps = function (obj) {
const{name,age,mail,isOnline,score}=obj
console.log(name,age);
console.log(mail,isOnline,score)
  };
  
  
 
  
  console.log(countProps({ name: 'Mango', age: 2 }));
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

 /*1.3*/
 const findBestEmployee = function (employees) {
const entries  = Object.entries(employees)
console.log(entries)
const[name,value] = entries
console.log(name,value)
  }

    
  
  
  
  
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
  );
  /*1.4*/
  const countTotalSalary = function (employees) {
   const keys = Object.keys(employees)
   console.log(keys)
  let[firstEmployee, secondEmployee, thirdEmployee]=keys
  console.log(firstEmployee, secondEmployee, thirdEmployee)
  };
  
  

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







  /*1.5*/
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function (arr, prop) {
  
   const[{name}]=products
   console.log(name)
 
    }
  
  
  
  
  
  
  
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
   
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]






  /*1.6*/
  const productsAmount = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  const calculateTotalPrice = function (allProdcuts, productName) {
    let total = 0;
    for (let elem of allProdcuts) {

    if (elem.name === productName) {
      total = elem.price * elem.quantity
     
    }
   
  }
  return total;
  }

  console.log(calculateTotalPrice(productsAmount, 'Радар')); //5200
 
  console.log(calculateTotalPrice(productsAmount, 'Дроїд')); 


  /*Task 2 */
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
    const transactions = {amount,type}
     this.transactions.push(transactions)
      return transactions;
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
     deposit(amount) {
      this.balance=+amount
      const transaction = this.createTransaction(amount,'deposit')
      console.log(transaction)
    },
    
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
     this.balance=-amount
     const transactionDraw=this.createTransaction(amount,'withdraw')
     console.log(transactionDraw)
    },
  
    
     /* Метод повертає поточний баланс*/
     
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
     getTransactionDetails(id) {
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
      return false;
     },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
     getTransactionTotal(type) {
      let total = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          total += transaction.amount;
        }
      }
      return total;
     },
  };
  account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());