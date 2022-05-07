const gridContainer = document.querySelector('.grid-container');
const btn = document.querySelector('.button');
const gridContainerStyles = getComputedStyle(gridContainer);
let num = 0;
const colorPicker = document.querySelector('#color');



let removeGrid = function (num) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

let createGrid = function (num) {
    for (let i = 0; i < num; i++) {
        let item = document.createElement('div');
        item.setAttribute('class', `grid-item grid-item-${i + 1}`);
        editGridSquare(item, num);
        gridContainer.appendChild(item, num);
        item.addEventListener('mouseover', function () {
            item.style.background = colorPicker.value;
        });
    }
}

let editGridSquare = function (square, num) {
    square.style.width = `${(900 / Math.sqrt(num)) - 2}px`;
    square.style.height = `${(900 / Math.sqrt(num)) - 2}px`;
}

let getNum = function () {
    num = prompt('How many squares on each side?');
    num *= num;
}

let editGridContainer = function (num) {
    gridContainer.style.gridTemplate = `repeat(${Math.sqrt(num)}, ${100 / Math.sqrt(num)}%) / repeat(${Math.sqrt(num)}, ${100 / Math.sqrt(num)}%)`;
}

btn.addEventListener('click', function () {
    alert(colorPicker.value);
    removeGrid(num);
    getNum();
    editGridContainer(num);
    createGrid(num);
});




