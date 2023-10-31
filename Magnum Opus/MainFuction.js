function lerArquivoETransferirParaHTML() {
    // Use a função fetch para carregar o arquivo de texto
    fetch('info.txt')
        .then(response => response.text())  // Transforma a resposta em texto
        .then(texto => {
            // Encontre o elemento de parágrafo pelo ID e defina o texto do parágrafo
            const paragrafo = document.getElementById('texto-para-inserir');
            paragrafo.textContent = texto;
        })
        .catch(error => {
            console.error('Erro ao ler o arquivo de texto:', error);
        });
}

// Chame a função para realizar a ação
lerArquivoETransferirParaHTML();

const particlesContainer = document.querySelector('.particles');

// Create particles
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${2 + Math.random()}s`;
    particlesContainer.appendChild(particle);
}