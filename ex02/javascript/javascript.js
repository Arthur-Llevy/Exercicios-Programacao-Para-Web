let botaoAdicionar = document.getElementById('botaoAdicionar');

botaoAdicionar.addEventListener('click', () => {
    let numeroDigitado = document.getElementById('numeroDigitado');
    let somatorio = document.getElementById('somatorio');    

    let validacao = parseInt(numeroDigitado.value)
    
    if (!isNaN(validacao)) {
        somatorio.value = Number(somatorio.value) + Number(numeroDigitado.value);
        numeroDigitado.value = "";
        numeroDigitado.focus();

        return;
    } else {
        alert('Digite um número.')        
    }
})

