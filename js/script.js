const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const sizeButton = document.getElementById('size');
const inputColor = document.querySelector('.input-color');
const randomColorButton = document.getElementById('random');
const monoColorButton = document.getElementById('mono');

let grid= 16;
let gridWidth = Math.pow(16, 2);



function getProperty() {
    gridWidth = prompt('How many squares wide you would like your grid?', '');
    grid = Math.pow(gridWidth, 2);

    if (gridWidth > 200) {
        alert('That\'s a lot of squares.\nEnter a smaller number.');
        getProperty();
    } else if (gridWidth < 0) {
        alert('Enter a number greater than zero');
        getProperty();
    } else if (gridWidth == '') {
        alert('You didn\'t enter anything!\n Try again.');
        getProperty();
    } else if (gridWidth == null) {
        alert('You didn\'t enter anything!\n Try again.');
        getProperty();
    } else if (gridWidth == 0) {
        alert('You didn\'t enter anything!\n Try again.');
        getProperty();
    }
}

function resetGrid() {
    let gridContainer = document.getElementById('gridContainer');

    if (gridContainer != null) {
        gridContainer.remove();
    }
}

function drawGrid() {
    let cellWidth = 500 / gridWidth + 'px';
    let cellHeight = 500 / gridWidth + 'px';

    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'gridContainer');
    container.appendChild(gridContainer);

    let i = 0;
    while (i < grid) {
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'gridsquare');
        gridDiv.style.width = cellWidth;
        gridDiv.style.height = cellHeight;
        gridContainer.appendChild(gridDiv);
        i++;
    }

}

function makeMonoColor() {
    const gridDivs = document.querySelectorAll('.gridsquare');

    gridDivs.forEach((gridDiv) => {
        gridDiv.removeEventListener('mouseenter', makeRandomColor);
        gridDiv.onmouseenter = () => gridDiv.style.background = inputColor.value;
    });
}

function makeRandomColor() {
    const gridDivs = document.querySelectorAll('.gridsquare');

    gridDivs.forEach((gridDiv) => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        gridDiv.removeEventListener('mouseenter', makeMonoColor);
        gridDiv.onmouseenter = () => gridDiv.style.background = `rgb(${red}, ${green}, ${blue})`
    });
}

function makeDefaultGridColor() {
    this.style.background = inputColor.value;
}

function resizeGrid() {
    getProperty();
    resetGrid();
    drawGrid();
}

function clearGrid() {
    resetGrid();
    drawGrid();
}

resetButton.addEventListener('click', clearGrid);
sizeButton.addEventListener('click', resizeGrid);
randomColorButton.addEventListener('click', makeRandomColor);
monoColorButton.addEventListener('click', makeMonoColor);
inputColor.onchange = makeMonoColor;

resizeGrid();