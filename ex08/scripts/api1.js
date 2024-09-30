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
        let ip = document.createElement('li');
        ip.innerText = `ip: ${data.ip}`;
        let tipo = document.createElement('li');
        tipo.innerText = `tipo: ${data.type}`;
        let codigoContinente = document.createElement('li');
        codigoContinente.innerText = `Código do continente: ${data.continent_code}`;
        let nomeContinente = document.createElement('li');
        nomeContinente.innerText = `Nome do continente: ${data.continent_name}`;
        let cidade = document.createElement('li');
        cidade.innerText = `Cidade: ${data.city}`;


        pre.appendChild(ip);
        pre.appendChild(tipo);
        pre.appendChild(codigoContinente);
        pre.appendChild(nomeContinente);
        pre.appendChild(cidade);

    }).catch(() => alert('Falha ao realizar a requisição'))
};


const fazerRequisicao = () => {
    let enderecoIp = document.getElementById('enderecoIp').value;

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
        let ip = document.createElement('li');
        ip.innerText = `ip: ${data.ip}`;
        let tipo = document.createElement('li');
        tipo.innerText = `tipo: ${data.type}`;
        let codigoContinente = document.createElement('li');
        codigoContinente.innerText = `Código do continente: ${data.continent_code}`;
        let nomeContinente = document.createElement('li');
        nomeContinente.innerText = `Nome do continente: ${data.continent_name}`;
        let cidade = document.createElement('li');
        cidade.innerText = `Cidade: ${data.city}`;

        pre.appendChild(ip);
        pre.appendChild(tipo);
        pre.appendChild(codigoContinente);
        pre.appendChild(nomeContinente);
        pre.appendChild(cidade);
    }).catch(() => alert('Falha ao realizar a requisição')) 
};