function createDiceFace(value) {
    const face = document.createElement("div");
    face.classList.add("dice-face");

    for (let i = 0; i < 9; i++) {
        const pip = document.createElement("div");
        pip.classList.add("pip");

        if (value > 1 && i === 0) {
            pip.classList.add("dot");
        }
        if (value > 1 && i === 8) {
            pip.classList.add("dot");
        }
        if (value > 3 && i === 2) {
            pip.classList.add("dot");
        }
        if (value > 3 && i === 6) {
            pip.classList.add("dot");
        }
        if (value > 5 && i === 3) {
            pip.classList.add("dot");
        }
        if (value > 5 && i === 5) {
            pip.classList.add("dot");
        }
        if (value % 2 === 1 && i === 4) {
            pip.classList.add("dot");
        }

        face.appendChild(pip);
    }

    return face;
}

const diceContainer = document.getElementById("dice-container");
const rollButton = document.getElementById("roll");
const sumDisplay = document.getElementById("sum");


// Roll five dice when the button is clicked
rollButton.addEventListener("click", function() {

    // Clear the previous dice
    diceContainer.innerHTML = "";

    let sum = 0;

    
    for (let i = 0; i < 5; i++) {


        const value = Math.floor(Math.random() * 6) + 1;


        sum += value;


        const dice = createDiceFace(value);


        diceContainer.appendChild(dice);
    }


    sumDisplay.textContent = "Sum: " + sum;

});