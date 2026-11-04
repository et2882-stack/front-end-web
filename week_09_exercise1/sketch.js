const button_change_color = document.getElementById("change-color");

button_change_color.addEventListener("click", function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("change-color").style.backgroundColor = `rgb(${green}, ${blue}, ${red})`;
    document.getElementById("reset").style.backgroundColor = `rgb(${blue}, ${red}, ${green})`;
    document.getElementById("change-color").style.color = "black";
    document.getElementById("reset").style.color = "black";
});

const button_reset = document.getElementById("reset");
button_reset.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.getElementById("change-color").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("change-color").style.color = "black";
    document.getElementById("reset").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("reset").style.color = "black";
});

