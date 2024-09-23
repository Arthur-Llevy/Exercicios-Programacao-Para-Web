const requisicaoExemplo = () => {
    fetch('https://api.marketstack.com/v1/eod?access_key=8a8cbc91c6bc263cd4827b36eb94b52f&symbols=AAPL')
    .then(resposta => {

        let statusRequisicaoExemplo = document.getElementById('statusRequisicaoExemplo');
        statusRequisicaoExemplo.innerText = `Status da requisição: ${resposta.status}`;

        if (resposta.ok) {
            return resposta.json();
        }
        
        return alert("Falha ao realizar a requisição")
    
    })
    .then(data => {
        let pre = document.getElementById('dadosRequisicaoExemplo');
        pre.innerText = JSON.stringify(data)
    }).catch(() => alert('Falha ao realizar a requisição'))
};


