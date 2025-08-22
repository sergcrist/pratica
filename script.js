// Este código irá esperar até que todo o conteúdo da página, incluindo o formulário, seja carregado antes de ser executado.
document.addEventListener('DOMContentLoaded', function() {
    
    // Procura o formulário com o ID 'formContato' na página HTML.
    // 'const' é usado para variáveis que não terão seu valor alterado.
    const form = document.getElementById('formContato');

    // Adiciona um "ouvinte de evento" ao formulário.
    // Quando o evento 'submit' (quando alguém clica no botão "Enviar") acontecer, a função anônima será executada.
    form.addEventListener('submit', function(event) {
        
        // Esta linha impede o comportamento padrão do formulário, que é recarregar a página ao ser enviado.
        // Isso nos permite controlar o que acontece com os dados.
        event.preventDefault(); 
        
        // Encontra os campos de entrada do formulário.
        // 'querySelector' encontra o primeiro elemento que corresponde ao seletor CSS.
        const nome = form.querySelector('input[type="text"]').value.trim(); // .trim() remove espaços em branco extras no início e no fim.
        const email = form.querySelector('input[type="email"]').value.trim();
        const mensagem = form.querySelector('textarea').value.trim();
        
        // 'if' é uma estrutura de controle que verifica se uma condição é verdadeira.
        // Se 'nome', 'email' E 'mensagem' não estiverem vazios (ou seja, se tiverem algum valor), o bloco de código dentro do 'if' será executado.
        if (nome && email && mensagem) {
            // 'alert()' mostra uma pequena janela pop-up na tela com a mensagem dentro dos parênteses.
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            
            // Este método 'reset()' limpa todos os campos do formulário, deixando-os prontos para um novo preenchimento.
            form.reset();
        } else {
            // Se a condição do 'if' for falsa, o bloco de código dentro do 'else' será executado.
            alert('Por favor, preencha todos os campos.');
        }
    });
});
