document.addEventListener("DOMContentLoaded", () => {
    const jokeText = document.getElementById("text-1");
    const charCount = document.getElementById("text-2");
    const getJokeButton = document.getElementById("get-joke");
    const clearJokeButton = document.getElementById("clear-joke");

   
    async function fetchJoke() {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            const data = await response.json();


            let joke = data.joke || `${data.setup} ... ${data.delivery}`;
            jokeText.innerText = joke;
            charCount.innerText = `Character count: ${joke.length}`;
        } catch (error) {
            jokeText.innerText = "Failed to load joke!";
            charCount.innerText = "Character count: 0";
        }
    }


    getJokeButton.addEventListener("click", fetchJoke);
    clearJokeButton.addEventListener("click", () => {
        jokeText.innerText = "Press the button for a joke!";
        charCount.innerText = "Character count: 0";
    });
});
