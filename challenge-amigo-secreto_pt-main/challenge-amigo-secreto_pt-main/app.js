//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// adicionar amigos (entrada: barra de pesquisa)
// cada amigo adicionado deve ser mostrado na tela
// escolher um amigo aleatoriamente
// mostrar o resultado na tela

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();

        input.value = '';
        input.focus();
    }
    else{
        alert("Por favor, insira um nome válido");
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo!");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo sorteado é: ${sorteado}</li>`;
}