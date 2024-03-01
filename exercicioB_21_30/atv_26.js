/** Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.*/

import * as io from './io.js'

//função que computa qual é o maior número entre os três lados
function verificador_maior(lado_1,lado_2,lado_3){
    let maior = lado_1

    if(lado_1 > lado_2){
        maior = lado_1
    }else if(lado_2 > lado_3){
        maior = lado_2
    }else{
        maior = lado_3
    }

    return maior
}

//verificar se lados maiores que zero
function verificar_se_lado_zero(ld_a,ld_b,ld_c){
    return ld_a > 0 && ld_b > 0 && ld_c > 0
}

//função que retorna comparação dos lados 
function somar_comparar(ld_a,ld_b,ld_c){
    return ld_a + ld_b >= ld_c
}

//verifica se os lados dados formam um triângulo 
function verificar_se_eh_triangulo(ld_a,ld_b,ld_c){
    
    if(verificar_se_lado_zero(ld_a,ld_b,ld_c)){

        return (somar_comparar(ld_a,ld_b,ld_c) && somar_comparar(ld_c,ld_b,ld_a) && somar_comparar(ld_a,ld_c,ld_b))

    }
    return false
}

//computa qual é o valor da hipotenusa e dos catetos
function computar_hipotenusa_e_catetos(lado_a,lado_b,lado_c){

    //o lado que é maior
    const lado_maior = verificador_maior(lado_a,lado_b,lado_c)

    //verifica se é um triângulo
    if(verificar_se_eh_triangulo(lado_a,lado_b,lado_c)){

        //se a hipotenusa for o lado A
        if(lado_maior === lado_a) {

            const hipotenusa = lado_a
            const cateto1 = lado_b
            const cateto2 = lado_c

            io.print(`Os valores pertencentes a este triângulo => Hipotenusa:[${hipotenusa}],Catetos:[${cateto1}, ${cateto2}]`)
        }
        //se a hipotenusa for o lado B
        else if(lado_maior === lado_b){

            const hipotenusa = lado_b
            const cateto1 = lado_a
            const cateto2 = lado_c

            io.print(`Os valores pertencentes a este triângulo => Hipotenusa:[${hipotenusa}],Catetos:[${cateto1}, ${cateto2}]`)
        }
        //se a hipotenusa for o lado C
        else{

            const hipotenusa = lado_c
            const cateto1 = lado_a
            const cateto2 = lado_b

            io.print(`Os valores pertencentes a este triângulo => Hipotenusa:[${hipotenusa}],Catetos:[${cateto1}, ${cateto2}]`)}

        }
        //informa que os valores dos lados não formam um triângulo
    else{

        io.print('Os lados informados não formam um triângulo válido.')
    }

}

function main(){

    const lado_A = io.get_number('Informe o valor do lado A: ')
    const lado_B = io.get_number('Informe o valor do lado B: ')
    const lado_C = io.get_number('Informe o valor do lado c: ')

    computar_hipotenusa_e_catetos(lado_A,lado_B,lado_C)

}

main()