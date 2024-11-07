document.getElementById('get-joke').addEventListener('click', fetchJoke);

async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const jokeData = await response.json();
    
    let joke;
    if (jokeData.type === 'single') {
        joke = jokeData.joke;
    } else {
        joke = $ ;{jokeData.setup} {jokeData.delivery};
    }
    
    document.getElementById('jokeDisplay').innerText = joke;
}