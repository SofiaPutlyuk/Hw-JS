/*Task 1 */
const searchElementUl = document.getElementById('categories')
const categoriesItems = searchElementUl.querySelectorAll('li.item');
console.log(`У списку ${categoriesItems.length} категорії.`);
categoriesItems.forEach(item => {
    const text = item.querySelector('h2').textContent
    const elementLi = item.querySelectorAll('ul > li')
    /*Я використала > для знаодження нащадка , читала одну з документацій :) */
    console.log(`Категорія : ${text}`)
    console.log(`Кількість елементів ${elementLi.length}`)
})

/*Task 2 */
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const searchBoxingredients = document.getElementById('ingredients')
ingredients.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    searchBoxingredients.appendChild(li);
});
/*Task 3 */
const searchGallery = document.getElementById('gallery')
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const htmlImg = images.map(elem => `<img src=${elem.url} alt="${elem.alt}"/>`).join('')
searchGallery.insertAdjacentHTML('beforeend', htmlImg)
/*Task 4 */
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
const searchSpan = document.getElementById('value')
let counterValue = 0;
buttonDecrement.addEventListener('click', function () {
    counterValue -= 1
    searchSpan.textContent = counterValue

})
buttonIncrement.addEventListener('click', function () {
    counterValue += 1
    searchSpan.textContent = counterValue

})