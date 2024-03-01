/**Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual
 *  delas é a mais recente.*/

import * as io from './io.js'

//verificar se as datas são válidas
function verificar_se_dias_validos(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2){

    return (io.verificar_data(dia_1,mes_1,ano_1)) && (io.verificar_data(dia_2,mes_2,ano_2))
}

//verificar se as duas datas são iguais
function verificar_data_iguais(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2){

    return dia_1 === dia_2 && mes_1 === mes_2 && ano_1 === ano_2
}

//calcula qual data é mais recente
function data_mais_recente(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2){

    if(ano_1 > ano_2){
        return true
    }
    //verificar se as datas estão no mesmo ano
    else if( ano_1 === ano_2){

        if(mes_1 > mes_2){
            return true

        }
        //verificar se os meses são os mesmos
        else if(mes_1 === mes_2){

            // se os dias são válidos
            if(dia_1 > dia_2){
                return true
            }
            else{    
                return false
            }

        }
        else{
            return false
        }

    }

    else{
        return false
    }
}

function main(){

    const dia_data1 = io.get_number_int('Informe o dia da primeira data: ')
    const mes_data1 = io.get_number_int('Informe o mês da primeira data: ')
    const ano_data1 = io.get_number_int('Informe o ano da primeira data: ')

    const dia_data2 = io.get_number_int('Informe o dia da segunda data: ')
    const mes_data2 = io.get_number_int('Informe o mês da segunda data: ')
    const ano_data2 = io.get_number_int('Informe o ano da segunda data: ')

    if(verificar_se_dias_validos(dia_data1,mes_data1,ano_data1,dia_data2,mes_data2,ano_data2)){

        if(verificar_data_iguais(dia_data1,mes_data1,ano_data1,dia_data2,mes_data2,ano_data2)){
    
            io.print(`As duas datas são iguais: [${dia_data1}/${mes_data1}/${ano_data1}].`)
        }
        else{
    
            if(data_mais_recente(dia_data1,mes_data1,ano_data1,dia_data2,mes_data2,ano_data2)){
    
                io.print(`A data mais recente é: [${dia_data1}/${mes_data1}/${ano_data1}].`)
            }
            else{
    
                io.print(`A data mais recente é: [${dia_data2}/${mes_data2}/${ano_data2}].`)
            }
    
        }
    }
    else{

        io.print('DATAS INVÁLIDAS')
    }
}

main()