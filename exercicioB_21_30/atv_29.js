/**Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.*/

import * as io from './io.js'

//verifica se tem mais de 5 digitos
function validar_valor(valor){

    const valor_acima_zero = parseInt(valor / 10000)
    return valor_acima_zero > 0
}

//realiza a divisão e a soma dos dois primeiros digitos com os dois ultimos
function soma_dos_digitos(numero){

    const primeiros_digitos = parseInt(numero / 100)
    const ultimos_digitos = numero % 100

    const somatorio_digitos = primeiros_digitos + ultimos_digitos

    return somatorio_digitos

}
//verifica se é um quadrado perfeito
function verificar_quadrado_perfeito(numero){

    const soma_digitos = soma_dos_digitos(numero)
    const raiz_numero = Math.sqrt(numero)

    //compara a soma dos digitos com a raiz do número e informa o resultado para o usuário
    if(soma_digitos === raiz_numero){
        
        io.print(
`O número [${numero}] é um quadrado perfeito.
Soma dos digitos = [${soma_digitos}]
Raiz de ${numero} = [${raiz_numero}] `)

    }
    else{

        io.print(`O número [${numero}] não é um quadrado perfeito.`)
    }

}

function main(){

    const numero = io.get_number('Informe o valor do número[4 digitos]: ')

    if(validar_valor(numero)){

        io.print('Digite um número com 4 digitos')
    }
    else{
        verificar_quadrado_perfeito(numero)
    }
}

main()