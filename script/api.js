let jokeContainer = document.querySelector("#jokeDiv")

let getJokes = () => {
        return fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        }).then(joke => joke.json())
        .then (parsedJoke => {
            let newJoke = (parsedJoke.joke)
            jokeContainer.innerHTML = newJoke;
        } )
    }

export default getJokes 