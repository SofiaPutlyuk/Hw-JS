/*Task 1*/
const users = [
  { name: 'Moore Hensley' },
  { name: 'Sharlene Bush' },
  { name: 'Ross Vazquez' },
  { name: 'Elma Head' },
  { name: 'Carey Barr' },
  { name: 'Blackburn Dotson' },
  { name: 'Sheree Anthony' }
];
const getUserNames = users => {
return users.map(user => user.name);


};

console.log(getUserNames(users));
/*Task 2 */
const userEye = [
  { name: 'Moore Hensley', color: 'brown' },
  { name: 'Sharlene Bush', color: 'green' },
  { name: 'Carey Barr', color: 'blue' },
]

const getUsersWithEyeColor = (userEye, color) => {
  return userEye.filter(eye => eye.color===color);
  
};
 
console.log(getUsersWithEyeColor(userEye, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]*/

/*Task 3 */
const userGender = [
  {name:'Moore Hensley', gender:'male'},
  {name:'Sheree Anthony',gender:'female'},
  {name:'Carey Barr',gender:'male'},
  {name:'Elma Head',gender:'female'}

]
const getUsersWithGender = (userGender, gender) => {
   return userGender.filter(person => person.gender === gender);
  };
  
  console.log(getUsersWithGender(userGender, 'male')); // [ 'Moore Hensley', 'Sheree Anthony', 'Carey Barr', 'Elma Head' ]
 
/*Task 4 */
const usersActive = [
{name:'Moore Hensley',isActive: false},
{name:'Ross Vazquez', isActive: false},
{name:'Blackburn Dotson', isActive: true},
]
const getInactiveUsers = usersActive => {
 return usersActive.filter(gender => !gender.isActive);
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]*/
/*Task 5*/
const usersEmail = [
{name :'Sheree Anthony', email:'shereeanthony@kog.com' },
{name:'Carey Barr',email:'careybarr@nurali.com'},
{name:'Elma Head',email:'elmahead@omatom.com'}
]
const getUserWithEmail = (usersEmail, email) => {
return usersEmail.find(user => user.email===email);
};

console.log(getUserWithEmail(usersEmail, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(usersEmail, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}*/
/*Task 6 */
const usersAge = [
{name:'Ross Vazquez',age:24},
{name:'Elma Head',age:21},
{name:'Carey Barr',age:27},
{name:'Moore Hensley',age:37},
{name:'Sharlene Bush',age:34},
{name:'Blackburn Dotson',age:38},
{name:'Sheree Anthony',age:39}
]
const getUsersWithAge = (users, min, max) => {
 return usersAge.filter(user =>user.age >= min && user.age <= max );
};

console.log(getUsersWithAge(usersAge, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(usersAge, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
