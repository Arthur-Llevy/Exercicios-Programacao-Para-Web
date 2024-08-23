let botaoAdicionar = document.getElementById('botaoAdicionar');

botaoAdicionar.addEventListener('click', () => {
    let numeroDigitado = document.getElementById('numeroDigitado');
    let somatorio = document.getElementById('somatorio');

    somatorio.value = Number(somatorio.value) + Number(numeroDigitado.value);
})

