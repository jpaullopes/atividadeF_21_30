/**Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se
 *dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade,
 e outro pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro,
o quadrado deste terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 45^2 = 2025. */

import * as io from './io.js'

//validar se o número está entre 1000 e 9999
function validar_numero(valor){

    return valor > 1000 && valor < 9999
}

//realiza ad ivisão e a soma dos dois primeiros digitos com os dois ultimos
function soma_dos_digitos(numero){

    const primeiros_digitos = parseInt(numero / 100)
    const ultimos_digitos = numero % 100

    const somatorio_digitos = primeiros_digitos + ultimos_digitos

    return somatorio_digitos

}

//verifica se a soma dos digitos elevados ao quadrado é igual ao número
function soma_igual_quadrado(numero){

    const soma_digitos = soma_dos_digitos(numero)
    const quadrado_soma_digitos = soma_digitos ** 2

    if(quadrado_soma_digitos === numero){
        
    //informa ao usuário o resultado
        io.print(
`O número [${numero}] obedece as regras:
Soma dos digitos = [${soma_digitos}]
Quadrado da soma = [${quadrado_soma_digitos}]`)
    }
    else{
        io.print(`O número [${numero}] NÃO OBEDECE as regras.`)
    }
}

function main(){

    const numero = io.get_number('Informe o valor do número[1000 - 9999]: ')
    
    
    if(validar_numero(numero)){

    //iforma as regras que o número precisa passar
        io.print(`
---O NÚMERO PRECISA OBEDECER AS SEGUINTES REGRAS:---
-> A divisão do número em dois dígitos [dezena e unidade]e [milhar e centena]
-> A soma dos dois novos números gera um terceiro que elevado a 2 é igual ao número original.
    `)

        soma_igual_quadrado(numero)
    }
    else{
        io.print('Digite um valor válido.')
    }

}

main()