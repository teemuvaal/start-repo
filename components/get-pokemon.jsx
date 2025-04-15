// API end point:
// https://pokeapi.co/api/v2/pokemon/ditto


function getPokemon() {
    try {
        const response = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default getPokemon;