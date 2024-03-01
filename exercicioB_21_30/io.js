import { question } from "readline-sync"
 
export function get_number(numero){

    return Number(question(numero))
}

export function print(texto){

    console.log(texto)
} 

export function get_number_int(numero){
    
    return Number.parseInt(question(numero))
}

export function input(texto){

    return question(texto)
}

 
//função que vai verificar se a data informada é válida ou não
export function verificar_data(dia,mes,ano){
    
    //função que verifica se o ano informado na data é bissexto
    function verificador_ano_bissexto(ano){
        return ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)
                
    }

    //função que verifica se o mês tem 30 dias
    function verificar_mes_30_dias(mes) {
        return mes === 4 || mes === 6 || mes === 9 || mes === 11
    
    }

    //verificar se o dia informado é válido
    if(dia < 1 || dia > 31){
        return false
    }
    //verificar se o mês informado é válido
    if(mes < 1 || mes > 12){
        return false
    }
    //verificar se o ano for bissexto e se o mês for fevereiro se o dia vai ser válido
    if(verificador_ano_bissexto(ano)){
        if(mes === 2 && dia > 29){
            return false
        }else{
            return true
        }
    }else{
        if(mes === 2 && dia > 28){
            return false
        }
    }
    /*se o dia informado vai ser válido nos meses com só 30 dias 
    PS: fiz uma alteração nessa confirmação após verificar a questão 10,pois possuia um erro de logica T_T*/
    if(verificar_mes_30_dias(mes) && dia > 30) {
        return false
    }

    return true
    
}