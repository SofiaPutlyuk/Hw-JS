/*Task 1 */
const searchGallery = document.querySelector('.gallery')
searchGallery.addEventListener('keydown', function (event) {
    const cording = 0
    console.log(cording)
    if (event.key === "ArrowLeft") {
        cording -= 10
        searchGallery.style.left = cording + 'px'
    } else if (event.key === "ArrowRight") {
        cording += 10
        searchGallery.style.left = cording + 'px'
    }
})

/*Task 2  */


const searchButtoncreate = document.querySelector('button[data-action="render"]')
const searchInput = document.querySelector('input')

const container = document.getElementById('boxes')
searchButtoncreate.addEventListener('click', function () {
    const amount = searchInput.value
    createBoxes(amount)
})
function createBoxes(amount) {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const resultColor = `rgb(${red}, ${green}, ${blue})`
    for (let i = 0; i < amount; i++) {
        const createDiv = document.createElement('div')
        createDiv.id = "colorDiv"
        createDiv.style.background = resultColor
        let sizeDiv = 30 + i * 10
        createDiv.style.width = sizeDiv + 'px';
        createDiv.style.height = sizeDiv + 'px';

        container.appendChild(createDiv)
    }

}


const searchButtondestroy = document.querySelector('button[data-action="destroy"]')
searchButtondestroy.addEventListener('click', function () {



    function destroyBoxes() {
        const boxes = container.querySelectorAll('div');

        boxes.forEach(function (box) {
            box.remove();
        });
    }
    destroyBoxes()
})