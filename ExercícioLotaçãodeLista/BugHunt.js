// Lista inicial de convidados a serem processados
let convidados = ["Rafaela", "Felipe", "Nicolas", "Amado", "Miguel", "SAIR"];
let entrada = [];
let i = 0;

// 1. O loop continua a rodar enquanto houver menos de 5 pessoas na entrada
while (entrada.length < 5) {
    console.log("Processando convidado: ", convidados[i]);

    // 2. Verifica o comando de interrupção
    // O break agora está corretamente dentro do if!
    if (convidados[i] == "SAIR") {
        break; 
    }
    
    // 3. Adiciona o convidado à lista oficial
    entrada.push(convidados[i]);
    
    // 4. Incrementa o índice para ler o próximo nome na próxima volta
    i++;
}

// 5. Exibe os resultados no final do processo
console.log("Lotação esgotada!");
console.log("");
console.log("Nomes convidados: ", entrada);