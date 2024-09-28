let viagens = []; // Array para armazenar as viagens

// Função para carregar dados do arquivo api.json
async function carregarDados() {
    const response = await fetch('api.json');
    if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
    }
    viagens = await response.json(); // Armazenar os dados no array de viagens
}

// Função para buscar resultados com base na origem e destino
function buscarViagens(origem, destino) {
    const resultadosFiltrados = viagens.filter(viagem => 
        viagem.origem.toLowerCase() === origem.toLowerCase() &&
        viagem.destino.toLowerCase() === destino.toLowerCase()
    );
    return resultadosFiltrados;
}

// Função para exibir resultados na página
function exibirResultados(viagens) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores

    if (viagens.length === 0) {
        resultadosDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        return;
    }

    viagens.forEach(viagem => {
        const viagemDiv = document.createElement('div');
        viagemDiv.className = 'resultado-viagem';
        viagemDiv.innerHTML = `
            <h4>${viagem.destino}</h4>
            <p>Origem: ${viagem.origem}</p>
            <p>Preço: ${viagem.preco}</p>
            <p>${viagem.descricao}</p>
        `;
        resultadosDiv.appendChild(viagemDiv);
    });
}

// Adicionando evento ao botão de busca
document.getElementById('buscar').addEventListener('click', () => {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    
    const viagensFiltradas = buscarViagens(origem, destino);
    exibirResultados(viagensFiltradas);
});

// Carregando os dados assim que o script for executado
carregarDados().catch(error => console.error(error));
