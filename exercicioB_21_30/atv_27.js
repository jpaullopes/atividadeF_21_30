/** Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) 
 * do seu nascimento e a data (dia, mês e ano) atual.*/

import * as io from './io.js'

//verificar se as datas são válidas
function verificar_se_datas_validas(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2){

    return (io.verificar_data(dia_1,mes_1,ano_1)) && (io.verificar_data(dia_2,mes_2,ano_2))
}

//valida as datas também para que a idade não seja negativa
function validar_duas_datas(dia_idade,mes_idade,ano_idade,dia_atual,mes_atual,ano_atual) {

    if(ano_atual < ano_idade){
        return false
    }
    else if(ano_atual === ano_idade ){
        if(mes_atual < mes_idade){

            return false
        }
        else{
            if(dia_atual < dia_idade){
                return false
            }
        }

    }

    return true
}

//calcula a idade da pessoa
function computar_idade(dia_idade,mes_idade,ano_idade,dia_atual,mes_atual,ano_atual){

    let resultado_idade_anos = ano_atual - ano_idade
    let resultado_idade_meses = mes_atual - mes_idade
    let resultado_idade_dias = dia_atual - dia_idade

    //se a subtrção dos dias forem negativas
    if(resultado_idade_dias < 0){

        //reduz um mes e transforma em 30 dias
        resultado_idade_meses -= 1
        resultado_idade_dias = 30 + (resultado_idade_dias)
    }
    //se a subtração dos meses forem negativas
    if(resultado_idade_meses < 0){

        //reduz 1 ano e transforma em 12 meses
        resultado_idade_anos -= 1
        resultado_idade_meses = 12 + (resultado_idade_meses)
    }


    return `[${resultado_idade_anos} anos, ${resultado_idade_meses} meses, ${resultado_idade_dias} dias]`
}

function main(){

    const dia_idade = io.get_number('Informe o dia do seu nascimento: ')
    const mes_idade = io.get_number('Informe o mês do seu nascimento: ')
    const ano_idade = io.get_number('Informe o ano do seu nascimento: ')
    const dia_atual = io.get_number('Informe o dia atual: ')
    const mes_atual = io.get_number('Informe o mês atual: ')
    const ano_atual = io.get_number('Informe o ano atual: ')

    const idade_da_pessoa = computar_idade(dia_idade,mes_idade,ano_idade,dia_atual,mes_atual,ano_atual)

    //verifica se ambas validações são verdadeiras
    if(validar_duas_datas(dia_idade,mes_idade,ano_idade,dia_atual,mes_atual,ano_atual) && verificar_se_datas_validas(dia_idade,mes_idade,ano_idade,dia_atual,mes_atual,ano_atual)){

        io.print(`A sua idae é de [${idade_da_pessoa}]`)
    }
    else{

        io.print('DATA INVÁLIDA')
    }

}

main()