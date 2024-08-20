// script.js
const button = document.getElementById('jogar');

button.addEventListener('click', async function() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomPokemon = data.results[randomIndex];

        const pokemonResponse = await fetch(randomPokemon.url);
        const pokemonData = await pokemonResponse.json();

        const pokemonName = pokemonData.name;
        const pokemonImage = pokemonData.sprites.front_default;
        const pokemonType = pokemonData.types[0].type.name;

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <h2>${pokemonName}</h2>
            <img src="${pokemonImage}" alt="${pokemonName}">
            <p>Tipo: ${pokemonType}</p>
        `;
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
    }
});
