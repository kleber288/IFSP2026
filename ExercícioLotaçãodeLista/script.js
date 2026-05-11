var controlador = false;
// Controla se a lista já foi encerrada (por comando "!" ou por lotação esgotada).
// Começa como false (lista aberta) e passa a true quando encerrada.

var listados = [];
// Array que armazena os nomes inseridos pelo utilizador.
// Começa vazio e vai crescendo a cada nome válido adicionado.

// CAPTURA DOS ELEMENTOS HTML
// Guardamos referências aos elementos do DOM para usá-los ao longo do código
// sem precisar de os procurar repetidamente com getElementById()

var mensagem = document.getElementById("mensagem");
// Referência ao parágrafo <p id="mensagem"> onde são exibidas as mensagens de feedback

var lista = document.getElementById("lista");
// Referência à lista <ul id="lista"> onde os nomes são adicionados visualmente

// FUNÇÃO PRINCIPAL: ValidarNomes()
// Chamada pelo botão "Adicionar Nome" sempre que o utilizador clica

function ValidarNomes() {

    // --- PASSO 1: Obter e limpar o valor digitado ---
    let entrada = document.getElementById("entrada");
    // Localiza o campo de input pelo seu id
    let nome = entrada.value.trim();
    // Lê o texto digitado e remove espaços em branco do início e fim
    // Exemplo: "  João  " → "João"

    // --- PASSO 2: Verificar se a lista já está encerrada ---
    if (controlador) {
        // Se a variável 'encerrado' for true, bloqueia qualquer nova inserção
        mensagem.textContent = "A lista já está encerrada. Não é possível adicionar mais nomes.";
        mensagem.style.color = "orange";
        return; // Interrompe a função imediatamente
    }

    // --- PASSO 3: Validar campo vazio ---
    if (nome === "") {
        // Se o utilizador clicar no botão sem digitar nada (ou só espaços),
        // exibe um aviso e interrompe a função
        mensagem.textContent = "Por favor, insira um nome.";
        mensagem.style.color = "red";
        return;
    }

    // --- PASSO 4: Verificar o comando de encerramento "!" ---
    if (nome === "!") {
        // O ponto de exclamação é um comando especial para fechar a lista manualmente
        mensagem.textContent = "Lotação encerrada pelo comando de saída (!)!";
        mensagem.style.color = "red";
        controlador = true;    // Marca a lista como encerrada
        entrada.value = "";  // Limpa o campo de input para o utilizador
        return;              // Encerra a função sem adicionar nada à lista
    }

    // --- PASSO 5: Adicionar o nome à lista ---
    listados.push(nome);
    // Adiciona o nome ao array de nomes em memória
    // Exemplo: listados = ["Ana", "Bruno"] → após push("Carlos") → ["Ana", "Bruno", "Carlos"]
    let linha = document.createElement("li");
    // Cria dinamicamente um novo elemento <li> no HTML
    linha.textContent = nome;
    // Define o texto do <li> como o nome inserido pelo utilizador
    lista.appendChild(linha);
    // Adiciona o novo <li> dentro do <ul id="lista">, tornando-o visível na página
    entrada.value = "";
    // Limpa o campo de input para facilitar a próxima inserção
    mensagem.textContent = "Nome '" + nome + "' adicionado com sucesso!";
    mensagem.style.color = "green";
    // Exibe mensagem de sucesso em verde

    // --- PASSO 6: Verificar se a lotação máxima foi atingida ---
    if (listados.length === 5) {
        // Se o array tiver exatamente 5 nomes, a lotação está esgotada
        mensagem.textContent = "Lotação esgotada! Já temos 5 inscritos.";
        mensagem.style.color = "red";
        controlador = true;
        // Bloqueia automaticamente qualquer nova adição a partir deste ponto
    }
}