// Função responsável por validar o número digitado
function validarNumero() {
    // Pega o valor digitado no input
    let numero = document.getElementById("numero").value;
    // Pega o elemento onde a mensagem será exibida
    let mensagem = document.getElementById("mensagem");
    // Verifica se o campo está vazio
    if (numero === "") {
        // Exibe mensagem de erro
        mensagem.textContent = "Por favor, insira um número.";
        // Define a cor do texto como vermelho
        mensagem.style.color = "red";
    } else {
        // Converte o valor digitado para número inteiro
        numero = parseInt(numero);
        // Verifica se o número é maior que 10
        if (numero > 10) {
            // Mensagem para número maior que 10
            mensagem.textContent = "O número é maior que 10.";
            // Cor verde
            mensagem.style.color = "green";
        // Verifica se o número é maior que 5
        } else if (numero > 5) {
            // Mensagem para número entre 6 e 10
            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            // Cor laranja
            mensagem.style.color = "orange";
        } else {
            // Mensagem para número menor ou igual a 5
            mensagem.textContent = "O número é 5 ou menor.";
            // Cor azul
            mensagem.style.color = "blue";
        }
    }
}