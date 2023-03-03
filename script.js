async function buscaEnderecos(cep) {
    let menssagemErro = document.getElementById('erro')
    menssagemErro.innerHTML = ""
    try {
        var consultaCep =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json()
        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não encontrado')
        }
        const logradouro = document.getElementById('endereco')
        const bairro = document.getElementById('bairro')
        const cidade = document.getElementById('cidade')
        const estado = document.getElementById('estado')

        logradouro.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida)        
        return consultaCEPConvertida
    } catch (erro) {
        menssagemErro.innerHTML = '<p> CEP inválido. Tente novamente! </p>'
        console.log(erro)
    }
}

let cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEnderecos(cep.value))