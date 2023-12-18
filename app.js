const jokeContainer = document.getElementById('jokeContainer');
const btn = document.getElementById('btn');

const jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () => {
    jokeContainer.textContent = 'Loading...';



    fetch(jokeUrl)
    .then( data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`; 
    })
    .catch(error => {
        jokeContainer.textContent = 'Failed to fetch joke. Please try again.';
        console.error('Error fetching joke:', error);
    });
}

btn.addEventListener("click", getJoke)

// getJoke();