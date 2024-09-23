const requisicaoExemplo = () => {
    fetch('https://api.ipstack.com/134.201.250.155?access_key=7232b2386b5d73f37c51226d5c80a1ee')
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
    let enderecoIp = document.getElementById('enderecoIp').value;
    console.log(enderecoIp)

    fetch(`https://api.ipstack.com/${enderecoIp}?access_key=7232b2386b5d73f37c51226d5c80a1ee`)
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

