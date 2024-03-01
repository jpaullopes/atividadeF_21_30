/**Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. 
 * Vale lembrar que o coeficiente A deve ser diferente de 0 (zero). */

import * as io from './io.js'

//validar se o coeficiente A for diferente de 0
function validar_coeficiente(coeficiente_A){
    return coeficiente_A !== 0
}

//calcula o valor de delta
function computar_delta(a,b,c){

    const delta = (b ** 2) - (4 * a * c)
    return delta
}

//calucula o primeiro valor de x
function calcular_x1(a,b,raiz_delta){

    const x1 = (-b + raiz_delta) / (2 * a)
    return x1
}
//calcula o segundo valor de x
function calcular_x2(a,b,raiz_delta){

    const x2 = (-b - raiz_delta) / (2 * a)
    return x2
}

//calcula o x caso o delta for 0
function calcular_x(a,b){

    const x = -b  / (2 * a)
    return x
}

function computar_equação_segundo_grau(a,b,c){

    //verifica o coeficiente A
    if(validar_coeficiente(a)){

        const delta = computar_delta(a,b,c)
        const raiz_delta = delta ** (1/2)

        //se o delta for = 0
        if(delta === 0){

            const valor_x = calcular_x(a,b)
            io.print(`O único valor possivél para essa equação é X = [${valor_x.toFixed(2)}].`)
        }
        //se o delta for um valor negativo ele informa que não possui valores reais para o x1 e x2 
        else if(delta < 0){

            io.print('A equação não possuí valores reais.')
        }
        else{
    
            //informa os valores de x1 e x2
            const valor_x1 = calcular_x1(a,b,raiz_delta)
            const valor_x2 = calcular_x2(a,b,raiz_delta)
            io.print(`Os valores dessa equação são: X1 = [${valor_x1.toFixed(2)}] e X2 = [${valor_x2.toFixed(2)}].`)

        }

    }
    //se o coeficiente A for 0
    else{
        io.print('DIGITE UM VALOR DIFERENTE DE 0 PARA O COEFICIENTE "A"')
    }
}
function main(){

    const coeficiente_A = io.get_number('Informe o valor do coeficiente A: ')
    const coeficiente_B = io.get_number('Informe o valor do coeficiente B: ')
    const coeficiente_C = io.get_number('Informe o valor do coeficiente C: ')

    computar_equação_segundo_grau(coeficiente_A,coeficiente_B,coeficiente_C)

}

main()