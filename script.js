// script.js
const button = document.getElementById('jogar');

button.addEventListener('click', async function() {
    try {
        const response = await fetch('https://dailyverses.net/pt/versiculo-aleatorio-da-biblia');
        const data = await response.text();

        // Extract the verse from the response (you may need to adjust this based on the actual structure of the page)
        const verse = data.match(/Versículo Aleatório da Bíblia (.+?)<\/p>/)[1];

        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<p>${verse}</p>`;
    } catch (error) {
        console.error('Erro ao buscar versículo:', error);
    }
});
