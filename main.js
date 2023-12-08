//declare main container as a referenced variable
let mainContainer = document.getElementById("mainContainer");
//Declare Specify Number (For Reference Later)
let numberSpecified = 16;

//Create divs
//Set div as a variable
let divs = document.createElement("div");
//debug to test for divs existing
console.log(divs);
//loop to create 16 (Or specified number)
var toAdd = document.createDocumentFragment();
for (let i = 0; i <= numberSpecified; i++) {
  let newDiv = document.createElement("div");
  newDiv.id = "box" + i;
  newDiv.className = "newBox";
  toAdd.appendChild(newDiv);
}
//append all created divs to main container
mainContainer.appendChild(toAdd); //mine

// document.appendChild(toAdd); //Theirs

//Add color for visibility
// let divColor = document.getElementsByClassName("newBox");
// divColor.style.backgroundColor = "black"; //scope issue
//document.getElementsByClassName("newBox").style.backgroundColor = "black";

//loop to create 16 (Or specified number)
// for (let i = 0; i <= numberSpecified; i++){
// console.log("loop ran");
// };  //Old, replaced
