function mostrarDados() {

    const dadosAluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        cpf: document.getElementById('cpf').value,
        matricula: document.getElementById('matricula').value
    }

    if (dadosAluno.nome === "") {
        alert("Preencha o campo 'nome'");
        return;
    } else if (dadosAluno.idade === "") {
        alert("Preencha o campo 'idade'")   
        return;
    } else if (dadosAluno.cpf === "") {
        alert("Preencha o campo 'CPF'")   
        return;
    } else if (dadosAluno.matricula === "") {
        alert("Preencha o campo 'matrícula'")   
        return;
    }

    if (dadosAluno.idade.toString().includes(".")) {
        return alert('Por favor, digite uma idade válida sem casas decimais.');        
    }

    document.getElementById('dados').innerText = JSON.stringify(dadosAluno);
}