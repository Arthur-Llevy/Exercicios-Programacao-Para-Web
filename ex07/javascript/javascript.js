let vidasRestantes = 5;

const palavras = [
    "abacaxi", "anel", "amigo", "ave", "abacate",
    "bola", "bala", "banho", "bau", "banco",
    "casa", "cachorro", "carro", "cafe", "cama",
    "dado", "dedo", "doce", "dia", "dente",
    "elefante", "estrela", "escola", "elo", "escada",
    "faca", "festa", "fogo", "foca", "fada",
    "gato", "galo", "gelo", "goma", "ganso",
    "helicoptero", "hipopotamo", "hotel", "harpa", "horta",
    "ilha", "iglu", "iris", "indio", "ima",
    "janela", "jarra", "jogo", "jumento", "joaninha",
    "ketchup", "kiwi", "karate", "koala", "kamikaze",
    "leao", "lago", "lua", "lima", "livro",
    "maca", "mala", "muro", "mapa", "mesa",
    "neve", "ninho", "navio", "nuvem", "nota",
    "olho", "ovo", "onda", "ouro", "orelha",
    "pato", "peixe", "pipoca", "pato", "perna",
    "quilo", "quadro", "queijo", "quina", "queda",
    "raio", "rosa", "rede", "rato", "roupa",
    "sol", "sapo", "seda", "sabao", "sapato",
    "tigre", "touro", "teto", "tela", "tesoura",
    "uva", "urso", "urna", "uniao", "umidade",
    "vaca", "verao", "vento", "vela", "vidro",
    "webcam", "whisky", "waffle", "walker", "wifi",
    "xale", "xadrez", "xerox", "xarope", "xampu",
    "yoga", "yakisoba", "yogurte", "yeti", "yuppie",
    "zebra", "zoologico", "zumbi", "zero", "zagueiro"
];

let palavraAleatoriaEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

const letras = document.getElementById('letras');

palavraAleatoriaEscolhida.split('').map(letra => {
    let letraDaPalavra = document.createElement('p');
    letraDaPalavra.setAttribute('class', `letra letra-${letra}`)
    letraDaPalavra.textContent = "";
    letras.appendChild(letraDaPalavra)
});

const digitarLetra = (letra) => {

    if (vidasRestantes === 0) {
        document.getElementById('imagem').style.display = 'block';
        document.getElementById('palavraSorteada').textContent = `A palavra era: ${palavraAleatoriaEscolhida}`;
        document.getElementById('palavraSorteada').style.display = 'block';
        document.getElementById('botoes').style.display = 'none';
    }
    
    if (palavraAleatoriaEscolhida.indexOf(letra.toLowerCase()  ) !== -1) {
        Array.from(document.getElementsByClassName(`letra-${letra.toLowerCase()}`)).forEach(paragrafo => {
            paragrafo.textContent = letra
        });
    } else {
        vidasRestantes--;
        // document.getElementById('imagem').style.display = 'block';
        // document.getElementById('palavraSorteada').textContent = `A palavra era: ${palavraAleatoriaEscolhida}`;
        // document.getElementById('palavraSorteada').style.display = 'block';
        // document.getElementById('botoes').style.display = 'none';
    }
};

const resetar = () => {
    window.location.reload();
}