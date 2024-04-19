function verificaChuteValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        console.log('Valor Invalido')
    }

    if (numeroMaiorMenorValorPermitido(numero)) {
        console.log(`valor invalido: o número precisa está entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenorValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
