/*Task 1 */
const users = [
  {name: 'Moore Hensley',balance:2811},
  {name:'Sharlene Bush',balance:3821},
  {name:'Ross Vazquez',balance:3793},
  {name:'Elma Head',balance: 2278},
  {name:'Carey Barr',balance:3951},
  {name:'Blackburn Dotson',balance:1498},
  {name:'Sheree Anthony',balance:2764}
]
const calculateTotalBalance = users => {
 return users.reduce((totalBalance,sum)=> totalBalance+sum.balance,0);
};

console.log(calculateTotalBalance(users))
/*Task 2 */
const userFriend = [
  {name:'Sharlene Bush',friends:['Briana Decker', 'Sharron Pace']},
  {name:'Sheree Anthony',friends:['Goldie Gentry', 'Briana Decker']},
  {name:'Elma Head',friends: ['Goldie Gentry', 'Aisha Tran']}
]
const getUsersWithFriend = (userFriend, friendName) => {
 return userFriend.reduce((total,friend) =>{
  if(friend.friends.includes(friendName)) {
    total.push(friend.friends)
  }
  return total;
   }),[]
  }




console.log(getUsersWithFriend(userFriend, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(userFriend, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]*/
/*Task 3 */
const usersFriends  = [
{name: 'Moore Hensley',friends: ['Sharron Pace'],},
{name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace']},
{name: 'Ross Vazquez',friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner']},
{ name: 'Elma Head',friends: ['Goldie Gentry', 'Aisha Tran']},
{ name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong']},
{ name: 'Blackburn Dotson',friends: ['Jacklyn Lucas', 'Linda Chapman']},
{ name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker']}
]
const getNamesSortedByFriendsCount = usersFriends => 
 usersFriends.reduce((total,friend) => {
  total.push(...friend.friends)
   return total;
 },[])
 const sorted = usersFriends.sort((a,b) => a.total.length - b.total.length )
 console.log(sorted)
 const nameSorted = sorted.map(meet => meet.sorted)
 console.log(nameSorted)
console.log(getNamesSortedByFriendsCount(usersFriends));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]






/*Task 4 */
const userSkills = [
 {name:'Moore Hensley',skills: ['ipsum', 'lorem']},
 {nmae:'Sharlene Bush', skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum']},
 {name:'Ross Vazquez', skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit']},
 { name: 'Elma Head',skills: ['adipisicing', 'irure', 'velit']},
 { name: 'Carey Barr',skills: ['ex', 'culpa', 'nostrud']},
 {name: 'Blackburn Dotson',skills: ['non', 'amet', 'ipsum']},
 {name: 'Sheree Anthony', skills: ['lorem', 'veniam', 'culpa']}
]
const getSortedUniqueSkills = userSkills => 
userSkills.reduce((skill,totalSkill) => {
skill.push(...totalSkill.skills)

const sortName = [...new Set(skill)]
const uniqueSkills = sortName.sort()
return uniqueSkills;
},[])

console.log(getSortedUniqueSkills(userSkills));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
