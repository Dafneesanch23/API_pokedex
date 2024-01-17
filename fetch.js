// Fetch
//
// POST
const BASE_URL = 'https://pokeapi.co/api/v2/'; 

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async
document.addEventListener('DOMContentLoaded', async () => {
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

//  document.addEventListener('DOMContentLoaded', async () => {
//     const cardContainer = document.getElementById('card-container');
//  }
//     const storedId = localStorage.getItem('currentPokeId');
//     const initialId = storedId ? parseInt(storedId) : 1;
//     const pokemon = await fetchPokemon(initialId);
//     console.log(pokemon.name, pokemon.id, pokemon.weight);
// })

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name, pokemon.id, pokemon.weight);
    })

//  document.addEventListener('DOMContentLoaded', async () => {
//     //const cardContainer = document.getElementById('card-container');
//     const storedId = localStorage.getItem('currentPokeId');
//     const initialId = storedId ? parseInt(storedId) : 1;
//     const pokemon = await fetchPokemon(initialId);
//     console.log(pokemon.name, pokemon.id, pokemon.weight);
// })

// obtener el anterior
document.getElementById('previous-btn')
.addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId -1);
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name, pokemon.id, pokemon.weight);
})

// obtener el siguiente
document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);

        const card = document.createElement('div');
        card.classList.add('pokemon-div'); 

        console.log(pokemon.name, pokemon.id, pokemon.weight);
    })

 
//// CARD
function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('card-container');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = `${BASE_URL}sprites/front_default`;
    img.alt = pokemon.name;

    imgContainer.appendChild(img);

    const namePoke = document.createElement('h2');
    namePoke.classList.add('name');
    namePoke.textContent = pokemon.namePoke
 
    const idPoke = document.createElement ('p');
    idPoke.textContent = `ID: ${pokemon.id}`;

    const weightPoke = document.createElement('p');
    weightPoke.textContent = `Peso: ${pokemon.weight} kg`;

    card.appendChild(imgContainer);
    card.appendChild(namePoke);
    card.appendChild(idPoke);
    card.appendChild(weightPoke);

    cardContainer.appendChild(card);
}); 

////////////////// POST
//

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'title1',
//         body: 'Lorem ipsum dolor sit amet',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(res => res.json())
//     .then(json => console.log(json))


/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
