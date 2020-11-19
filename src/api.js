const BASE_URL = "https://pokeapi.co/api/v2";

async function fetchpokemonURL (url) {
    let response = await fetch(url);
    if (response.ok) { // if HTTP-status is 200-299
      // get the response body (the method explained below)
    //   let json = await response.json();
    //   console.log(json);
    return response.json();
    //internally going t0 return a promise
    } else {
      //alert("HTTP-Error: " + response.status);
      throw new Error("HTTP-Error: " + response.status);
    }  
 }

 async function fetchAPokemon(pokemonName) {
// the url to fetch a pokemon shuld have a subpath pokemon
const pokeMonURL = `${BASE_URL}pokemon/${pokemonName}`
return await fetchpokemonURL(pokeMonURL)
 }

 export {fetchAPokemon, fetchpokemonURL};

 