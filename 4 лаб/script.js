const apiUrl = 'https://dog.ceo/api/breeds/image/random';

const loadDogBtn = document.getElementById('load-dog-btn');
const dogImageContainer = document.getElementById('dog-image-container');

async function fetchRandomDogImage() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayDogImage(data.message);
}

function displayDogImage(imageUrl) {
  dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Собака" class="dog-image">`;
}

loadDogBtn.addEventListener('click', fetchRandomDogImage);
