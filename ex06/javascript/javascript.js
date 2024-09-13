const separar = () => {
    let palavra = document.getElementById('palavra');
    let letras = palavra.value.split("");

    letras.forEach(letra => {
        let paragrafo = document.createElement('p');

        paragrafo.classList.add('letra');
        paragrafo.innerText = letra.toUpperCase();
        
        document.getElementById('letras').appendChild(paragrafo)
    });
}