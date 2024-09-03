let botaoAdicionar = document.getElementById('botaoAdicionar');
let numeros = [];
let media = 0;

botaoAdicionar.addEventListener('click', () => {
    let numeroDigitado = document.getElementById('numeroDigitado');
    let somatorio = document.getElementById('somatorio');    
    let inputMedia = document.getElementById('media');    
    let validacao = parseInt(numeroDigitado.value)

    
    if (!isNaN(validacao)) {
        numeros.push(numeroDigitado.value);
        media = Number(somatorio.value) / Number(numeros.length);    
        console.log(somatorio.value)
        somatorio.value = Number(somatorio.value) + Number(numeroDigitado.value);
        numeroDigitado.value = "";
        numeroDigitado.focus();
        inputMedia.value = media


        return;
    } else {
        alert('Digite um número.')        
    }
})

