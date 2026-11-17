const dogImage = document.getElementById("dogImage");
const dogButton = document.getElementById("dogButton");

async function getDogImage() {
    try {
        const response = await fetch("https://random.dog/woof.json");
        const data = await response.json();

        // Skip videos and unsupported formats
        const extension = data.url.split(".").pop().toLowerCase();

        if (["mp4, webm"].includes(extension)) {
            return getRandomDog();
        }
        dogImage.src = data.url;
    } catch (error) {
        console.error("Couldn't fetch a dog", error);
    }
}

dogButton.addEventListener("click", getDogImage);

getRandomDog();
