const gridContainer= document.querySelector(`.gridContainer`);
squareCount='';


// Function to create 16 square grid
function gridCraft(value){
    squareCount=value;
for (i=0; i<=squareCount; i++){
    let gridSquare= document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);
}};
// Colors squares that have been moused over black
let gridSpaces =``;

function gridListener(){
    gridSpaces = document.querySelectorAll(`.gridSquare`);
    gridSpaces.forEach(space => {
     space.addEventListener(`mouseover`, function() {
        space.classList.add("gridSquareBlack");
    });
})};

gridCraft(256);
gridListener();




//The Reset Button
const resetButton= document.querySelector(".resetButton");
resetButton.addEventListener('click', function(){
    gridSpaces.forEach( cell =>{
    cell.remove();   
    });

    gridCraft(prompt("please enter the number of grid squares you would like.",256));
    gridListener();
});



    