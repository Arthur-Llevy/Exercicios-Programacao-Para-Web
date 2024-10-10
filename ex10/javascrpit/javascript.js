let listaDespesas = document.getElementById('listaDespesas');
let valorSomatorio = document.getElementById('valorSomatorio');

const headers = {
    "X-Parse-Application-Id": "SQUcUVFzmJMSZCLTt01g85kY01nG8GDkMSLgUgdQ",
    "X-Parse-REST-API-Key": "9q98KmAGV4c83QiTsrksn8iOThbwsRyPusuj3Bbn",
    "Content-Type": "application/json"
};

const alterarVisibilidadePopup = () => {
    let popup = document.getElementById('criarDespesaDiv');
    popup.style.opacity = popup.style.opacity === '1' ? 0 : 1;
}

const pegarDespesas = async () => {
    try {
        const resposta = await fetch("https://parseapi.back4app.com/classes/Despesa", {
            method: 'GET',
            headers: headers
        })

        if (resposta.ok) {
            listaDespesas.innerHTML = "";
            let respostaEmJson = await resposta.json();
    
            respostaEmJson.results.forEach(despesa => {
                let novaDespesa = document.createElement('li');
                let inputValorDespesa = document.createElement('input');
                let botaoEditar = document.createElement('button');
                let botaoDeletar = document.createElement('button');
                let botaoSalvarEdicao = document.createElement('button');
                let div = document.createElement('div');

                inputValorDespesa.value = despesa.valor;
                inputValorDespesa.disabled = true;
                inputValorDespesa.classList.add('inputValorDespesa');
                inputValorDespesa.id = `despesa-${despesa.objectId}`

                novaDespesa.innerText = `${despesa.descricao}`;

                botaoEditar.innerText = "Editar";
                botaoEditar.classList.add('botaoEditar');
                botaoEditar.id = despesa.objectId;
                botaoEditar.onclick = alterarVisibilidadeInputDespesa;

                botaoDeletar.innerText = "x";
                botaoDeletar.classList.add('botaoDeletar');
                botaoDeletar.id = despesa.objectId;
                botaoDeletar.onclick = deletarDespesa;

                botaoSalvarEdicao.innerText = "Salvar";
                botaoSalvarEdicao.id = despesa.objectId;
                botaoSalvarEdicao.classList.add('botaoSalvar');
                botaoSalvarEdicao.onclick = editarDespesa;                

                div.appendChild(novaDespesa);
                div.appendChild(inputValorDespesa);
                div.appendChild(botaoEditar);
                div.appendChild(botaoDeletar);
                div.appendChild(botaoSalvarEdicao);
                
                
                listaDespesas.appendChild(div);
            });
            
            let somatorioDespesas = respostaEmJson.results.reduce((valorAtual, item) => { 
                return valorAtual + item.valor
            }, 0);

            let valorConvertidoParaReal = parseFloat(somatorioDespesas).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
    
            valorSomatorio.innerText = `${valorConvertidoParaReal}`;
        } else {
            throw new Error('Falha ao buscar as despesas');
        }
    } catch(erro) {
        alert(erro);
    }
}

const criarDespesa = async () => {
    let dados = {
        descricao: document.getElementById('descricaoDespesa').value,
        valor: Number(document.getElementById('valorDespesa').value),
    }

    try {
        const resposta = await fetch("https://parseapi.back4app.com/classes/Despesa", {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: headers
        })

        if (resposta.ok) {
            let respostaEmJson = await resposta.json();
            alert('Despesa criada com sucesso!');
            pegarDespesas();
        } else {
            throw new Error('Falha ao criar a despesa.');
        }

    } catch(erro) {
        alert(erro);
    }
}

document.getElementById('formulario').onsubmit = async (e) => {
    e.preventDefault();
    try {
        await criarDespesa();
        alterarVisibilidadePopup();
    } catch (erro) {
        alert(erro);
    }
}

const alterarVisibilidadeInputDespesa = async (e) => {
    const idDespesa = e.target.id;
    let inputDespesa = document.getElementById(`despesa-${idDespesa}`);
    inputDespesa.disabled = !inputDespesa.disabled;
} 

const editarDespesa = async (e) => {
    const idDespesa = e.target.id;
    let inputDespesa = document.getElementById(`despesa-${idDespesa}`);
    let dados = {
        valor: Number(inputDespesa.value),
    }

    try {
        const resposta = await fetch(`https://parseapi.back4app.com/classes/Despesa/${idDespesa}`, {
            method: 'PUT',
            body: JSON.stringify(dados),
            headers: headers
        })

        if (resposta.ok) {
            let respostaEmJson = await resposta.json();
            alert('Despesa editada com sucesso!');
            pegarDespesas();
        } else {
            throw new Error('Falha ao editar a despesa.');
        }

    } catch(erro) {
        alert(erro);
    }
}

const deletarDespesa = async (e) => {
    const idDespesa = e.target.id;
    let confirmacao = confirm("Tem certeza que deseja excluir essa despesa?");

    try {
        const resposta = await fetch(`https://parseapi.back4app.com/classes/Despesa/${idDespesa}`, {
            method: 'DELETE',
            headers: headers
        })

        if (resposta.ok && confirmacao) {
            let respostaEmJson = await resposta.json();
            alert('Despesa excluída com sucesso!');
            pegarDespesas();
        } else {
            throw new Error('Falha ao excluir a despesa.');
        }

    } catch(erro) {
        alert(erro);
    }
}

window.onload = pegarDespesas;


