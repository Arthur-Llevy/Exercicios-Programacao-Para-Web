function sortearNumero() {
    let valorMinimo = document.getElementById('valorMinimo').value;
    let valorMaximo = document.getElementById('valorMaximo').value;

    valorMinimo = parseInt(valorMinimo);
    valorMaximo = parseInt(valorMaximo);

    if (!isNaN(valorMinimo) && !isNaN(valorMaximo) && valorMinimo < valorMaximo) {
        let numeroSorteado = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
        document.getElementById('numeroSorteado').innerText = `Número sorteado: ${numeroSorteado}`;
    } else {
        alert('Por favor, insira valores válidos com o valor mínimo menor que o valor máximo.');
    }
}
