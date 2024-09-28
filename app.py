from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Dados de exemplo para destinos e pacotes
destinos = [
    {"id": 1, "nome": "Rio de Janeiro", "descricao": "Praias, cultura e muita diversão!"},
    {"id": 2, "nome": "São Paulo", "descricao": "O coração financeiro do Brasil!"},
    {"id": 3, "nome": "Salvador", "descricao": "História e festas incríveis!"}
]

pacotes = [
    {"id": 1, "origem": "São Paulo", "destino": "Rio de Janeiro", "preco": 1500, "duracao": "5 dias"},
    {"id": 2, "origem": "São Paulo", "destino": "Salvador", "preco": 1200, "duracao": "7 dias"}
]

# Página inicial (renderiza o HTML)
@app.route('/')
def home():
    return render_template('index.html')

# API para buscar viagens com base na origem e destino
@app.route('/buscar', methods=['GET'])
def buscar_viagem():
    origem = request.args.get('origem')
    destino = request.args.get('destino')

    # Filtra os pacotes baseados na origem e destino
    resultados = [p for p in pacotes if p['origem'].lower() == origem.lower() and p['destino'].lower() == destino.lower()]
    
    return jsonify(resultados)

if __name__ == '__main__':
    app.run(debug=True)
