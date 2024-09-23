let botaoAdicionar = document.getElementById('botaoAdicionar');
let numeros = [];
let media = 0;
let quantidadeClicks = 0;

botaoAdicionar.addEventListener('click', () => {
    let numeroDigitado = document.getElementById('numeroDigitado');
    let somatorio = document.getElementById('somatorio');    
    let inputMedia = document.getElementById('media');    
    let inputQuantidadeClicks = document.getElementById('quantidadeClicks');
    let validacao = parseInt(numeroDigitado.value);
    quantidadeClicks++;
    
    if (!isNaN(validacao)) {
        numeros.push(Number(numeroDigitado.value));
        let soma = numeros.reduce((acc, curr) => acc + curr, 0);
        media = soma / numeros.length;
        somatorio.value = soma;
        inputMedia.value = media;
        numeroDigitado.value = "";
        numeroDigitado.focus();
        inputQuantidadeClicks.value = quantidadeClicks;
        return;
    } else {
        alert('Digite um número.');
    }
});
