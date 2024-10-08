// JS file for the project Etch-a-Sketch

// Logic for starting the grid creation

// Capturing the elements for container & button mentioned in the html
const container = document.querySelector(".container");
const startButton = document.querySelector(".startButton");
const displayDiv = document.querySelector(".display");

// Creating a helper function to get the number of boxes from the user

function getUserInput(){
    let tryCount = 5;
    let intInp;
    while (tryCount) {
        intInp = parseInt(prompt("Enter the number of boxes (b/w 1 & 100): ", 16), 10);
        if (isNaN(intInp) || intInp < 1 || intInp > 100){
            alert(`Please enter only integer values b/w 1 & 100!`);
        } else {
            break;
        }
        tryCount--;
    }
    if (isNaN(intInp)){
        alert(`As you made multiple errors while entering a number. Let's proceed with 16!`);
        intInp = 16;
    }
    return intInp;
}
startButton.addEventListener("click", () =>{
    let n = getUserInput();
    displayDiv.innerHTML = ''; // Clear previous grid
    const size = Math.floor(500 / n); // Subtracting the total border width
    let displayDivDimension = n * size;
    displayDiv.style.width = `${displayDivDimension}px`;
    displayDiv.style.height = `${displayDivDimension}px`;

    for (let i = 0; i < n * n; i++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.addEventListener("mouseenter",() =>{
            div.style.backgroundColor = "black";
        })
        displayDiv.appendChild(div);
    }
})

