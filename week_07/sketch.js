
console.log("My JavaScript file is connected!");

let title = document.getElementById("title");
let message = document.getElementById("message");
let button = document.getElementById("change-button");

let secretOpened = false;

button.addEventListener("click", function() {
    if (secretOpened === false) {
        title.textContent = "The Secret Is Out!";
        title.style.color = "crimson";

        message.textContent = "You found the hidden message. The page was waiting for you.";

        document.body.style.backgroundColor = "#d9e8f5";
        button.textContent = "Close the Secret";

        secretOpened = true;
    } 
    else {
        title.textContent = "A Quiet Beginning";
        title.style.color = "darkgreen";

        message.textContent = "There is something hidden here.";

        document.body.style.backgroundColor = "#f0eee8";
        button.textContent = "Open the Secret";

        secretOpened = false;
    }
});
