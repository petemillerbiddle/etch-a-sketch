const gridContainer = document.querySelector('#grid-container');

let gridDimensions = 16;
let gridColumn; 
let gridSquare;

function listenerTest(e) {
    //alert(e.target + ' clicked');
}

for (let i = 0; i < gridDimensions; i++) {
    gridColumn = document.createElement('div');
    for (let j = 0; j < gridDimensions; j++) {
        gridSquare = document.createElement('div');
        gridSquare.textContent = '. .';
        gridColumn.appendChild(gridSquare);
        gridSquare.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'blue';
        });
    }
    gridColumn.classList.add('column');
    gridContainer.appendChild(gridColumn);
}
