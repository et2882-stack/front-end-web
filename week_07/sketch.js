console.log("My JavaScript file is connected!");

let title = document.getElementById("title");
let message = document.getElementById("message");

title.style.color = "darkgreen";

message.textContent = "Something has already changed.";


function changePage(){
    title.textContent = "You Changed the Story!";
    message.textContent = "The page responded to your action.";
    document.body.style.backgroundColor = "lightblue";
}