const gridContainer= document.querySelector(`.gridContainer`);


// Function to create 16 square grid
for (i=0; i<=16*16; i++){
    let gridSquare= document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);
}

// Colors squares that have been moused over black
const gridSpaces = document.querySelectorAll(`.gridSquare`);
gridSpaces.forEach(space => {
    space.addEventListener(`mouseover`, function() {
        space.classList.add("gridSquareBlack");
    });
});

//The Reset Button
const resetButton= document.querySelector(".resetButton");
resetButton.addEventListener('click', function(){
    gridSpaces.forEach( cell =>{
    cell.classList.remove("gridSquareBlack");    
    })});



    