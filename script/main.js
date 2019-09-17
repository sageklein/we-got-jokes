import getJokes from "./api.js"

let container = document.getElementById("button")

container.addEventListener("click", (event)=> {
    event.target.Id = "button";
    getJokes()
})
