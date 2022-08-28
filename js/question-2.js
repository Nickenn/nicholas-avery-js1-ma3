//Question 2

const CORS_URL = "https://noroffcors.herokuapp.com/";

const API_KEY = "7efc6cd74c2d4a1b974b83e8ad1d3e64";
const API_URL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${API_KEY}`;


const URL = CORS_URL + API_URL;

const resultsContainer = document.querySelector(".container");
const gameResults = document.querySelector(".result");

async function getGames() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log(data);

        const games = data.all;

        gameResults.innerHTML = "";

        for (let i = 0;i < games; i++) {
            console.log(games[i].text);

                if (i === 8) {
                        break;
                    }
        }

   gameResults.innerHTML += `<div cless="result"> 
    <p>Name: ${games} </p>
    <p>Rating: ${games} </p>
    <p>Number of tags: ${games}}</p>
    </div>`;

    //.name
    //.rating
    //.tags.length

    } catch (error) {
        console.log("An error has occured", error);
        resultsContainer.innerHTML += displayError("Bad things happened");
    }
}

getGames();

