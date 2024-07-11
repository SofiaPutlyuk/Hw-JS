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
const htmlIngredients = ingredients.map(item => `<li>${item}</li>`).join('')
/* Я , використала метод join() для того, щоб рядок HTML , якщо б я його не використала , я б отримала результаті масив рядків*/
searchBoxingredients.insertAdjacentHTML('beforeend', htmlIngredients)
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
    searchSpan.textContent = counterValue -= 1
})
buttonIncrement.addEventListener('click', function () {
    searchSpan.textContent = counterValue += 1

})