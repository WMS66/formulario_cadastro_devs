<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "ipacumuarama@gmail.com"; // Substitua pelo seu endereço de email
    $subject = "Novo formulário de cadastro recebido";

    // Construa a mensagem do email
    $message = "Nome: " . $_POST["nome"] . "\n";
    $message .= "Sobrenome: " . $_POST["sobrenome"] . "\n";
    // Adicione outros campos do formulário conforme necessário

    // Use a função mail() para enviar o email
    mail($to, $subject, $message);

    // Resposta para o cliente
    echo "Email recebido com sucesso!";
} else {
    // Se o método de requisição não for POST, retorna um erro
    http_response_code(405); // Método não permitido
    echo "Método não permitido";
}
?>
