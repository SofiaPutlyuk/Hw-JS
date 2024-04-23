/*Task1 */
const friends = [ "Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i++) {
string += friends[i] + ", ";
if (i!== friends.length) {
    string += ", ";
  } 
}

console.log(string);
console.log(friends.join(','));

/*Task 2 */
const cards = ["Карточка - 1 " , "Карточка - 2", "Карточка - 3", "Карточка - 4", "Карточка - 5"]
const cardIdx = cards.indexOf("Карточка - 3")
console.log(cardIdx)
const cardToRemove = cards.splice(cardIdx,1)
console.log(cards)
const cardInsert = cards.splice(cardIdx + 1,0,'Карточка-6')
console.log(cards)
const cardToUpdate = cards.splice(cardIdx + 2,1,'Карточка -7')
console.log(cards)








