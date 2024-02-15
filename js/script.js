document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('devForm')
    const statusMessage = document.getElementById('statusMessage')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const formData = new FormData(form)

        // Use AJAX para enviar os dados para o servidor
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'enviar_email.php', true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Exibe a mensagem de sucesso ao usuário
                    statusMessage.textContent = xhr.responseText
                } else {
                    // Exibe a mensagem de erro ao usuário
                    statusMessage.textContent = 'Erro ao enviar o email.'
                }
            }
        }

        xhr.send(formData)
    })
})
