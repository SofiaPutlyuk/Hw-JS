/*Task1 */
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "  ";
for(let string = 0 ; string  <= friends ; string++){

}
console.log(friends+string)
console.log(friends.join(','));
/*Task 2 */
const cards = ["Карточка - 1 " , "Карточка - 2", "Карточка - 3", "Карточка - 4", "Карточка - 5"]
const cardToRemove = cards.splice(2,1)
console.log(cards)
const cardInsert = cards.splice(3,0,'Карточка-6')
console.log(cards)
const cardToUpdate = cards.splice(2,0)
console.log(cards)