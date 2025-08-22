// O que faz este código?
// Ele lida com o formulário da página de contato. Quando o usuário clica no botão "Enviar",
// este script verifica se os campos estão preenchidos e exibe uma mensagem de sucesso ou erro.

// Explicação linha a linha:

// 1. `document.addEventListener('DOMContentLoaded', function() { ... });`
// Este é um "ouvinte de evento". Ele espera que o evento 'DOMContentLoaded' ocorra.
// Esse evento é disparado pelo navegador quando todo o HTML da página já foi carregado e está pronto para ser manipulado.
// Isso evita que o script tente encontrar elementos que ainda não existem na página.
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. `const form = document.getElementById('formContato');`
    // Esta linha procura por um elemento HTML que tenha o ID "formContato".
    // O `getElementById` é uma maneira muito eficiente de encontrar um elemento específico.
    // O resultado (o elemento do formulário) é armazenado na variável 'form'. O `const` significa que essa variável não pode ser reatribuída.
    const form = document.getElementById('formContato');

    // 3. `form.addEventListener('submit', function(event) { ... });`
    // Agora, adicionamos um ouvinte de evento ao nosso formulário.
    // O evento que estamos "ouvindo" é o 'submit', que acontece quando o usuário tenta enviar o formulário (geralmente clicando no botão 'Enviar').
    // A função anônima (function(event) { ... }) será executada sempre que esse evento ocorrer.
    form.addEventListener('submit', function(event) {
        
        // 4. `event.preventDefault();`
        // O comportamento padrão de um formulário é recarregar a página ao ser enviado.
        // O `event.preventDefault()` previne (cancela) esse comportamento. Isso nos permite controlar o que acontece em seguida com JavaScript.
        event.preventDefault(); 
        
        // 5. `const nome = form.querySelector('input[type="text"]').value.trim();`
        // Aqui, selecionamos os campos de entrada dentro do nosso formulário.
        // O `form.querySelector(...)` busca o primeiro elemento que corresponde ao seletor CSS.
        // `input[type="text"]` seleciona o campo de nome.
        // `.value` obtém o texto que o usuário digitou.
        // `.trim()` é um método útil que remove espaços em branco extras no início e no fim do texto. Isso evita que o usuário preencha o campo apenas com espaços.
        const nome = form.querySelector('input[type="text"]').value.trim();
        
        // 6. `const email = form.querySelector('input[type="email"]').value.trim();`
        // O mesmo processo para o campo de e-mail.
        const email = form.querySelector('input[type="email"]').value.trim();
        
        // 7. `const mensagem = form.querySelector('textarea').value.trim();`
        // O mesmo processo para a área de texto da mensagem.
        const mensagem = form.querySelector('textarea').value.trim();
        
        // 8. `if (nome && email && mensagem) { ... } else { ... }`
        // Esta é uma "condição". O `if` verifica se os valores das variáveis `nome`, `email` e `mensagem` são "verdadeiros".
        // Em JavaScript, uma string não-vazia é considerada "verdadeira" e uma string vazia (`''`) é considerada "falsa".
        // O operador `&&` significa "e". A condição completa só é verdadeira se *todos* os três campos tiverem algum conteúdo.
        // Se a condição for verdadeira, o código dentro das chaves do `if` será executado. Se for falsa, o código dentro do `else` será executado.
        if (nome && email && mensagem) {
            // 9. `alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');`
            // A função `alert()` exibe uma pequena janela de aviso no navegador com a mensagem fornecida.
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            
            // 10. `form.reset();`
            // Este método limpa todos os campos do formulário, deixando-o vazio e pronto para um novo preenchimento.
            form.reset();
        } else {
            // 11. `alert('Por favor, preencha todos os campos.');`
            // Se a validação falhar (pelo menos um campo está vazio), esta mensagem de alerta é exibida.
            alert('Por favor, preencha todos os campos.');
        }
    });
});
