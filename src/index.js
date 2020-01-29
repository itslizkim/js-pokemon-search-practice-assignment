document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  renderAllPokemon(POKEMON)
  document.querySelector("#pokemon-search-form").addEventListener('input', searchResults)
})


function searchResults(event){
  const result = findPokemon(POKEMON,event.target.value)

  renderSearch(result)
}

function renderSearch(pokemonArray){
  const PokemonList = document.querySelector("#pokemon-container")
  PokemonList.innerHTML = ``
  renderAllPokemon(pokemonArray)
}

function findPokemon(pokemonArray, searchTerm){
  return pokemonArray.filter(function(pokemon){

    return pokemon.name.includes(searchTerm)
  })
}

function renderOnePokemon(pokemonObj){
  const PokemonList = document.querySelector("#pokemon-container")
  const outerDiv = document.createElement('div')
  outerDiv.className = "pokemon-card"
  outerDiv.dataset.id = pokemonObj.id

  outerDiv.innerHTML =
    `<div class="pokemon-frame">
      <div class="content">
      <h1 class="center-text">${pokemonObj.name}</h1>
      </div>
      <div class="pokemon-image">
      <img src="${pokemonObj.sprites.front}" alt="${pokemonObj.name} class="front back">
      </div>
      <p class="abilities"> abilities: ${pokemonObj.abilities}</p>
    </p>
   `
  PokemonList.append(outerDiv)

  const img = outerDiv.querySelector("img")

  img.addEventListener("click", function(){
    if (img.src === pokemonObj.sprites.front){
      img.src = pokemonObj.sprites.back
    }else{
      img.src = pokemonObj.sprites.front
    }

  })

}


function renderAllPokemon(pokemonData){
  pokemonData.forEach(renderOnePokemon)
}



// function flipImg (){
//   document.body.classList.toggle("flip-image")
// }