const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Exemplo de rota
app.get('/destinos', (req, res) => {
    res.json([
        { id: 1, nome: 'Rio de Janeiro', origem: 'São Paulo', descricao: 'Cidade maravilhosa!', imagem: 'rio.jpg' }
    ]);
});

// Adicione outras rotas conforme necessário

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
