async function buscaEnderecos(cep) {
    try {
        var consultaCep =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json()
        if (consultaCEPConvertida.erro) {
            throw Error ('CEP não encontrado')
        }
        console.log(consultaCEPConvertida)
        
        return consultaCEPConvertida
    } catch (erro) {
        console.log(erro)
    }
}

let ceps = ['01001000', '01001001']
let conjuntoCeps = ceps.map(valor => buscaEnderecos(valor))
console.log(conjuntoCeps)
Promise.all(conjuntoCeps).then(response => console.log(response))