const gridContainer = document.querySelector('#grid-container');

let gridDimensions = 16;
let gridColumn; 
let gridSquare;

const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', resetGrid);

const btnChangeSize = document.querySelector('#btn-size');
btnChangeSize.addEventListener('click', changeSize);

function displayGrid() {
    for (let i = 0; i < gridDimensions; i++) {
        gridColumn = document.createElement('div');
        gridColumn.classList.add('column');
        for (let j = 0; j < gridDimensions; j++) {
            gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridColumn.appendChild(gridSquare);
            gridSquare.addEventListener('mouseenter', function (e) {
                e.target.classList.add('hovered');
            });
        }
        gridContainer.appendChild(gridColumn);
    }
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resetGrid() {
    removeGrid();
    displayGrid();
}

function changeSize() {
    removeGrid();
    let legalSize = false;
    while (!legalSize) {
        gridDimensions = prompt('how many pixels on a side? (1-100)')
        if ((gridDimensions >= 1 && gridDimensions <= 100) 
                && !isNaN(gridDimensions)) {
            legalSize = true;
        }
    }
    displayGrid();
}

displayGrid();