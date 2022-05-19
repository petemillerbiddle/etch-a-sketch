const gridContainer = document.querySelector('#grid-container');

let gridDimensions = 16;
let gridColumn; 
let gridSquare;

function listenerTest(e) {
    //alert(e.target + ' clicked');
}

const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', resetGrid);

const btnChangeSize = document.querySelector('#btn-size');
btnChangeSize.addEventListener('click', changeSize);

function displayGrid() {
    for (let i = 0; i < gridDimensions; i++) {
        gridColumn = document.createElement('div');
        for (let j = 0; j < gridDimensions; j++) {
            gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridColumn.appendChild(gridSquare);
            gridSquare.addEventListener('mouseenter', function (e) {
                e.target.classList.add('hovered');
            });
        }
        gridColumn.classList.add('column');
        gridContainer.appendChild(gridColumn);
    }
}

function resetGrid() {
    const gridSquares = gridContainer.getElementsByClassName('hovered');
    const numSquares = gridSquares.length;
    for (let i = 0; i < numSquares; i++) {
        gridSquares[0].classList.remove('hovered'); //removes square from gridSquares[] list
    }
}

function changeSize() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let legalSize = false;
    while (!legalSize) {
        gridDimensions = prompt('how many pixels on a side? (1-100)')
        if ((gridDimensions <= 100 && gridDimensions >= 1) && !isNaN(gridDimensions)) {
            legalSize = true;
        }
    }
    
    displayGrid();
}

displayGrid();