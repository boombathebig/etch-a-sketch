const gridContainer= document.querySelector(`.gridContainer`);
squareCount='';


// Function to create 16 square grid
function gridCraft(value){
    value= value*1
    let isNumber= typeof(value) === `number`;
    if(value<= 100 && isNumber == true){
    squareCount=value;
    gridContainer.style.gridTemplateColumns= `repeat(${value}, 1fr`;
    gridContainer.style.gridTemplateRows= `repeat(${value}, 1fr`;
for (i=0; i<=(squareCount * squareCount); i++){
    let gridSquare= document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridContainer.appendChild(gridSquare);
}} else{
    alert(`You must enter a number below 100 in order to reset the game.  Please click the reset button again and try again.`);
}
};
// Colors squares that have been moused over black
let gridSpaces =``;

function gridListener(){
    gridSpaces = document.querySelectorAll(`.gridSquare`);
    gridSpaces.forEach(space => {
     space.addEventListener(`mouseover`, function() {
        space.classList.add("gridSquareBlack");
    });
})};

gridCraft(16);
gridListener();




//The Reset Button
const resetButton= document.querySelector(".resetButton");
resetButton.addEventListener('click', function(){
    gridSpaces.forEach( cell =>{
    cell.remove();   
    });

    gridCraft(prompt("please enter the numbeer of squares you'd like on each side (Max 100).",256));
    gridListener();
});




    