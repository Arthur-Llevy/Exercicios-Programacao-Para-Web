const requisicaoExemplo = () => {
    fetch('https://api.marketstack.com/v1/eod?access_key=8a8cbc91c6bc263cd4827b36eb94b52f&symbols=AAPL')
    .then(resposta => {

        let statusRequisicaoExemplo = document.getElementById('statusRequisicaoExemplo');
        statusRequisicaoExemplo.innerText = `Status da requisição: ${resposta.status}`;

        if (resposta.ok) {
            return resposta.json();
        }
        
        return alert("Falha ao realizar a requisição");
    })
    .then(data => {
        let ul = document.getElementById('dadosRequisicaoExemplo');
        ul.innerHTML = '';

        data.data.slice(0, 5).forEach(item => {
            let li = document.createElement('li');
            li.innerText = `Ação: ${item.symbol}, Data: ${item.date}, Abertura: ${item.open}, Fechamento: ${item.close}, Volume: ${item.volume}`;
            ul.appendChild(li);
        });
    }).catch(() => alert('Falha ao realizar a requisição'));
};
