const gridContainer = document.querySelector('#grid-container');

let gridDimensions = 4;
let gridColumn; 
let gridSquare;

for (let i = 0; i < gridDimensions; i++) {
    gridColumn = document.createElement('div');
    for (let j = 0; j < gridDimensions; j++) {
        gridSquare = document.createElement('div');
        gridSquare.textContent = 'x';
        gridColumn.appendChild(gridSquare);
    }
    gridContainer.appendChild(gridColumn);
}
