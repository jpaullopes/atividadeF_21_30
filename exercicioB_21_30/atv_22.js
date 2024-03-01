/**Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis
 *  inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se
 *  que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia 
 * e terminar no dia seguinte. */

import * as io from './io.js'

//verifica se o tempo total da partia é maior que 24 horas
function verficar_mais_de_24(tempo_total){

    return tempo_total > 24 * 60
}

//calcula o tempo total que a partida teve
function computar_tempo_partida(inicio_hr, inicio_min,final_hr, final_min){

    //tranforma as horas em minutos e soma com os minutos que foram informados
    let total_tempo_em_horas = final_hr * 60 - inicio_hr * 60
    let total_tempo_em_minutos = final_min - inicio_min
    
    // verrificar se a partida começou em um dia e terminou em outro
    if(inicio_hr > final_hr){
        
        //calcula quantas horas faltaram para a partida passar de um dia e ir pro outro
        const falta_para_24_horas = 24 * 60 - inicio_hr * 60
        total_tempo_em_horas = falta_para_24_horas + final_hr * 60

    }
    //ver se os minutos do inicio da partida são maiores que o final
    if(inicio_min > final_min){

        total_tempo_em_minutos = final_min + (60 - inicio_min)

    }
    
    const soma_tempo_total = total_tempo_em_horas + total_tempo_em_minutos

    //realiza a conversão do tempo total da partida(em minutos) para hora e minutos
    const duracao_horas = parseInt(soma_tempo_total / 60)
    const duracao_minutos = soma_tempo_total % 60

    if(verficar_mais_de_24(soma_tempo_total)){

        io.print('O tempo de duração dessa partida supera 24 horas.[ELA É INVÁLIDA]')
    }
    else{
        
        io.print(`O tempo de duração dessa partida foi de [${duracao_horas}Hrs:${duracao_minutos}Mins].`)
    }
  
}

function main(){
    
    const inicio_hora = io.get_number_int('Informe a hora de início da partida[Hrs]: ')
    const inicio_minutos = io.get_number_int('Informe os minutos de início da partida[Mins]: ')
    const final_hora = io.get_number_int('Informe a hora do final da partida[Hrs]: ')
    const final_minutos = io.get_number_int('Informe os minutos do final da partida[Mins]: ')

    computar_tempo_partida(inicio_hora,inicio_minutos,final_hora,final_minutos)

}

main()