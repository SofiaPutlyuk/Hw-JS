/*Task 1 */
const searchButtonopen = document.querySelector('button[data-action="open-modal"]')
const searchModal = document.querySelector('.modal')
const searchBackdrop = document.querySelector('.backdrop')
searchButtonopen.addEventListener('click',function(){
searchBackdrop.classList.add('show-modal')
document.body.classList.add('show-modal')
})
const searchButtonclose = document.querySelector('button[data-action="close-modal"]')
searchButtonclose.addEventListener('click',function(){
searchBackdrop.classList.remove('show-modal')
 document.body.classList.remove('show-modal')
})
/*Task 2 */
/*Тут завдання по закриттю модального вікна за допомогою кліку по  бекдроп*/
searchBackdrop.addEventListener('click',function(event){
  if(event.target === searchBackdrop){
      searchBackdrop.classList.remove('show-modal')
    document.body.classList.remove('show-modal')
}
})

/*Task 3 */
const redInput = document.querySelector('input[value="red"]')
redInput.addEventListener('click',function(){
    document.body.style.background = 'red'
})
const whiteInput = document.querySelector('input[value="white"]')
whiteInput.addEventListener('click',function(){
    document.body.style.background = 'white'
})
const greenInput = document.querySelector('input[value="green"]')
greenInput.addEventListener('click',function(){
    document.body.style.background = 'green'
})
/*Task 4.1 */
const searchInput = document.getElementById('name-input')
const searchSpan = document.getElementById('name-output')
searchInput.addEventListener('input', function () {

const result = searchInput.value
searchSpan.textContent = result
searchSpan.style.display ="inline"
})
/*Task 4.2 */
const searchInputvalidaton = document.getElementById('validation-input')
const item =  parseInt(searchInputvalidaton.getAttribute('data-length'))
console.log(item)
searchInputvalidaton.addEventListener('blur',function(){
  const inputValue = searchInputvalidaton.value
  const inputLength = inputValue.length
 
   if(item === inputLength){
      searchInputvalidaton.classList.add('valid')
      
      
   } else if(item < inputLength) {
      searchInputvalidaton.classList.add('invalid')
     
   }
  
})

/*Task 5 */
const searchInputsize = document.getElementById('font-size-control')
const searchSpantext = document.getElementById('text')

searchInputsize.addEventListener('input', function(event) {
 const fontSize = parseInt(event.target.value) 
 searchSpantext.style.fontSize = fontSize + 'px'
})