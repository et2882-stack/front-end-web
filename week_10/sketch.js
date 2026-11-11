const status = document.getElementById("status");
const message = document.getElementById("message");
const button = document.getElementById("another");

async function getMessage() {

    status.textContent = "Searching for a message...";
    message.textContent = "";

    button.disabled = true;

    try {

        const number = Math.floor(Math.random() * 100) + 1;

        const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${number}`
    );

    if (!response.ok) {
        throw new Error("The request failed.");
    }

    const data = await response.json();

    const heading = document.createElement("h2");
    heading.textContent = data.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = data.body;

    message.append(heading, paragraph);

    status.textContent = "A message has arrived.";

    } catch (error) {

    status.textContent = "The message could not be retrieved.";
    console.error(error);

    } finally {

        button.disabled = false;

    }

}

button.addEventListener("click", getMessage);

getMessage();