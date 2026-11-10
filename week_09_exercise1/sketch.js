
const button_change_color = document.getElementById("change-color");

button_change_color.addEventListener("click", function() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
    document.getElementById("message").textContent =
        "A random color has been generated!";
    document.getElementById("message").style.color = "black";
});

const color_form = document.getElementById("color-form");

color_form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selected_color = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = selected_color;
    const red = parseInt(selected_color.substring(1, 3), 16);
    const green = parseInt(selected_color.substring(3, 5), 16);
    const blue = parseInt(selected_color.substring(5, 7), 16);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    if (brightness < 128) {
        document.getElementById("message").style.color = "white";
        document.getElementById("message").textContent =
            "You selected a dark color!";
    } else {
        document.getElementById("message").style.color = "black";
        document.getElementById("message").textContent =
            "You selected a light color!";
    }
});

const button_reset = document.getElementById("reset");

button_reset.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.getElementById("message").style.color = "black";
    document.getElementById("message").textContent =
        "The background has been reset!";
    document.getElementById("color-picker").value = "#ffffff";

});
