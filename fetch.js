// URL da API
const apiUrl = 'https://rickandmortyapi.com/api/character/';

// Função para buscar e exibir os personagens
async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar os personagens');
        }
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para exibir os personagens na página
function displayCharacters(characters) {
  const characterList = document.getElementById('character-list');
  characters.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('character-card');

      const characterName = document.createElement('h2');
      characterName.textContent = character.name;

      const characterImage = document.createElement('img');
      characterImage.src = character.image;
      characterImage.alt = character.name;

      const characterDetails = document.createElement('div');
      characterDetails.classList.add('character-details');

      const characterSpecies = document.createElement('p');
      characterSpecies.textContent = `Species: ${character.species}`;

      const characterOrigin = document.createElement('p');
      characterOrigin.textContent = `Origin: ${character.origin.name}`;

      const characterGender = document.createElement('p');
      characterGender.textContent = `Gender: ${character.gender}`;

      characterDetails.appendChild(characterSpecies);
      characterDetails.appendChild(characterOrigin);
      characterDetails.appendChild(characterGender);

      characterCard.appendChild(characterName);
      characterCard.appendChild(characterImage);
      characterCard.appendChild(characterDetails);

      characterList.appendChild(characterCard);
  });
}

// Chamar a função para buscar os personagens ao carregar a página
fetchCharacters();