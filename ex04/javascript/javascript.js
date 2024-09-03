function mostrarDados() {
    const dadosAluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        cpf: document.getElementById('cpf').value,
        matricula: document.getElementById('matricula').value
    }

    document.getElementById('paragrafoNome').innerText = `Nome: ${dadosAluno.nome}`;
    document.getElementById('paragrafoIdade').innerText = `Idade: ${dadosAluno.idade}`;
    document.getElementById('paragrafoCpf').innerText = `CPF: ${dadosAluno.cpf}`;
    document.getElementById('paragrafoMatricula').innerText = `Matrícula: ${dadosAluno.matricula}`;
}