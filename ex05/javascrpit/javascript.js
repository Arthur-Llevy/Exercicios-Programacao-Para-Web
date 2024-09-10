let botaoAdicionar = document.getElementById('botaoAdicionar');
let numeros = [];
let media = 0;
let somatorio = 0;    

botaoAdicionar.addEventListener('click', () => {
    let numeroDigitado = document.getElementById('numeroDigitado');
    let preMedia = document.getElementById('media');    
    let preNumerosDigitados = document.getElementById('numerosDigitados');    
    let validacao = parseInt(numeroDigitado.value);
    
    if (!isNaN(validacao)) {
        numeros.push(numeroDigitado.value);
        preNumerosDigitados.innerText = JSON.stringify(numeros);
        somatorio += Number(numeroDigitado.value);

        media = Number(somatorio) / numeros.length;    
        numeroDigitado.value = "";
        numeroDigitado.focus();
        preMedia.innerText = media;

        return;
    } else {
        alert('Digite um número.')        
    }
})

