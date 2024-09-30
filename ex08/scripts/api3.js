const requisicaoExemplo = () => {
    fetch('https://api.weatherstack.com/current?access_key=b389f74e5c3ac57828dfea8cb7db50ce&query=New%20York')
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

        let current = data.current;
        let location = data.location;

        let dadosRelevantes = [
            `Localização: ${location.name}, ${location.country}`,
            `Data e Hora: ${location.localtime}`,
            `Temperatura: ${current.temperature}°C`,
            `Descrição do Clima: ${current.weather_descriptions[0]}`,
            `Velocidade do Vento: ${current.wind_speed} km/h`,
            `Umidade: ${current.humidity}%`,
            `Cobertura de Nuvens: ${current.cloudcover}%`,
            `Sensação Térmica: ${current.feelslike}°C`,
            `Visibilidade: ${current.visibility} km`
        ];

        dadosRelevantes.forEach(dado => {
            let li = document.createElement('li');
            li.innerText = dado;
            ul.appendChild(li);
        });
    }).catch(() => alert('Falha ao realizar a requisição'));
};

const fazerRequisicao = () => {
    let cidade = document.getElementById('cidade').value;

    fetch(`https://api.weatherstack.com/current?access_key=b389f74e5c3ac57828dfea8cb7db50ce&query=${cidade}`)
    .then(resposta => {
        let statusRequisicao = document.getElementById('statusRequisicao');
        statusRequisicao.innerText = `Status da requisição: ${resposta.status}`;

        if (resposta.ok) {
            return resposta.json();
        }
        
        return alert("Falha ao realizar a requisição");
    })
    .then(data => {
        let ul = document.getElementById('dadosRequisicao');
        ul.innerHTML = '';

        let current = data.current;
        let location = data.location;

        let dadosRelevantes = [
            `Localização: ${location.name}, ${location.country}`,
            `Data e Hora: ${location.localtime}`,
            `Temperatura: ${current.temperature}°C`,
            `Descrição do Clima: ${current.weather_descriptions[0]}`,
            `Velocidade do Vento: ${current.wind_speed} km/h`,
            `Umidade: ${current.humidity}%`,
            `Cobertura de Nuvens: ${current.cloudcover}%`,
            `Sensação Térmica: ${current.feelslike}°C`,
            `Visibilidade: ${current.visibility} km`
        ];

        dadosRelevantes.forEach(dado => {
            let li = document.createElement('li');
            li.innerText = dado;
            ul.appendChild(li);
        });
    }).catch(() => alert('Falha ao realizar a requisição'));
};
