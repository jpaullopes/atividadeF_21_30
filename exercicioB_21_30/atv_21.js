/**Realize arredondamentos de números utilizando a regra usual da matemática: se a parte 
 * fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro 
 * imediatamente superior, caso contrario, é arredondado para o inteiro imediatamente 
 * inferior. */

import * as io from './io.js'

//arredonda o número para cima
function arredondar_cima(numero, parte_fracionaria){

    const adicionar_fracionario = 1 - parte_fracionaria
    const arredondamento = numero + adicionar_fracionario

    return arredondamento
}

//arredonda o número para baixo
function arredondar_baixo(numero, parte_fracionaria){

    const arredondamento = numero - parte_fracionaria

    return arredondamento
}

//confere se o número vai ser arredondado para cima ou para baixo e arredonda
function arredondar_numero(numero){

    const numero_inteiro = parseInt(numero)
    const parte_fracionaria = numero - numero_inteiro

    if(parte_fracionaria >= 0.5){

        return arredondar_cima(numero, parte_fracionaria)
    }
    else{

        return arredondar_baixo(numero,parte_fracionaria)
    }
}

function main(){

    const numero_racional = io.get_number('Informe o número que deseja arredondar: ')

    const numero_arredondado = arredondar_numero(numero_racional)

    io.print(`O número [${numero_racional}] arredondado é igual à [${numero_arredondado}].`)
}

main()
