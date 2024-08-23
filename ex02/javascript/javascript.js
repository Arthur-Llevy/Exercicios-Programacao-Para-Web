let botaoAdicionar = document.getElementById('botaoAdicionar');

botaoAdicionar.addEventListener('click', () => {
    let numeroDigitado = document.getElementById('numeroDigitado');
    let somatorio = document.getElementById('somatorio');    
    
    if (numeroDigitado.value !== "") {
        somatorio.value = Number(somatorio.value) + Number(numeroDigitado.value);
    } else {
        alert('Digite um número.')        
    }
})

