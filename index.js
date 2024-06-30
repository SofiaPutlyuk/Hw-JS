/*Task 1 */
const searchElementul = document.querySelectorAll('ul[id^="categories-"]');
searchElementul.forEach(element => {
    const result = element.querySelectorAll('li').length;
    console.log(` Кількість елементів : ${result}`);
});
const searchTitle = document.querySelectorAll('h2')
searchTitle.forEach(item => {
    console.log('Категорія:', item.textContent)
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

for (let elem of ingredients) {
    const result = document.createElement('li')
    result.textContent = elem
    document.getElementById('ingredients').appendChild(result)
}
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
images.forEach(element => {
    const result = `
   <img src = ${element.url} ${element.alt} />
   `
    searchGallery.insertAdjacentHTML('beforeend', result)
})
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