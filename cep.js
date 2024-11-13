// Função que faz a requisição para a API ViaCEP
$('#cep').on('blur', function() {
    let cep = $(this).val().replace(/\D/g, ''); // Remove qualquer caracter não numérico
    if (cep.length === 8) {
        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
            if (data.erro) {
                alert('CEP não encontrado!');
            } else {
                // Preenche os campos com as informações recebidas
                $('#rua').val(data.logradouro);
                $('#bairro').val(data.bairro);
                $('#cidade').val(data.localidade);
                $('#estado').val(data.uf);
                $('#ibge').val(data.ibge);
            }
        });
    }
});

// Impede o envio do formulário para que a requisição seja feita via AJAX
$('#cepForm').on('submit', function(e) {
    e.preventDefault();
});
