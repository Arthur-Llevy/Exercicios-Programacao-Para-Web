const requisicaoExemplo = () => {
    fetch('https://api.weatherstack.com/current?access_key=b389f74e5c3ac57828dfea8cb7db50ce&query=New%20York')
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


const fazerRequisicao = () => {
    let cidade = document.getElementById('cidade').value;

    fetch(`https://api.weatherstack.com/current?access_key=b389f74e5c3ac57828dfea8cb7db50ce&query=${cidade}`)
    .then(resposta => {
        let statusRequisicaoExemplo = document.getElementById('statusRequisicao');
        statusRequisicaoExemplo.innerText = `Status da requisição: ${resposta.status}`;

        if (resposta.ok) {
            return resposta.json();
        }
        
        return alert("Falha ao realizar a requisição")
    
    })
    .then(data => {
        let pre = document.getElementById('dadosRequisicao');
        pre.innerText = JSON.stringify(data)
    }).catch(() => alert('Falha ao realizar a requisição')) 
};