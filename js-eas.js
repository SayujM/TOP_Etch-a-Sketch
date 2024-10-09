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

// Adding a Cntrl & Alt key event checks to colour & erase cells
// Changing the colour to random ( from previous black).

startButton.addEventListener("click", () =>{
    let n = getUserInput();
    displayDiv.innerHTML = ''; // Clear previous grid
    const size = Math.floor(700 / n); // Subtracting the total border width
    let displayDivDimension = n * size;
    displayDiv.style.width = `${displayDivDimension}px`;
    displayDiv.style.height = `${displayDivDimension}px`;

    for (let i = 0; i < n * n; i++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = "white";
        div.addEventListener("mouseenter",(e) =>{
            if(e.ctrlKey){
                let red = Math.floor(Math.random() * 255);
                let green = Math.floor(Math.random() * 255);
                let blue = Math.floor(Math.random() * 255);
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            } else if (e.altKey){
                div.style.backgroundColor = "white";
            }
        })
        displayDiv.appendChild(div);
    }
})