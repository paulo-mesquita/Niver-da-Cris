// script.js
const button = document.getElementById('jogar');

button.addEventListener('click', async function() {
    try {
        const response = await fetch('https://dailyverses.net/pt/versiculo-aleatorio-da-biblia');
        const data = await response.text();

        // Parse the HTML response
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        // Extract the verse using a selector (adjusted to the actual HTML structure)
        const verseElement = doc.querySelector('.b1'); // Seleciona o elemento que contém o versículo
        const verse = verseElement.innerText.trim();

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<p>${verse}</p>`;
    } catch (error) {
        console.error('Erro ao buscar versículo:', error);
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<p>Erro ao buscar versículo. Por favor, tente novamente mais tarde.</p>`;
    }
});
