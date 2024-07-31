let button = document.getElementById("button");
let pokeImage = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async () => {

    //génération de l'id du pokemon de façon aléatoire
    let randomNumber = Math.ceil(Math.random() * 150) + 1

    //récupération des données des pokemon au format json sur l'api
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    let data = await fetch(requestString)
    let response = await data.json();

    //injection des données dans le DOM 
        //image
        pokeImage.src = response.sprites.front_default
        //id
        pokeNumber.textContent = `#${response.id}`
        //name
        pokeName.textContent = response.name


}

changePokemon();
button.addEventListener("click", changePokemon);
