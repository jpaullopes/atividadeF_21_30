/** Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a
 * dois cantos de um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. 
 * Lembre-se de que o valor da área não pode ser negativo.*/

import * as io from './io.js'

//calcula a área do retangulo com base nos lados
function computar_area_retangulo(coordena_x,coordena_y){

    const area_retangulo = coordena_x * coordena_y
    return area_retangulo
}

function main(){

    const coordenada_X = io.get_number('Informe o valor da coordenada X: ')
    const coordenada_Y = io.get_number('Informe o valor da cooredenada Y: ')

    const area_do_retangulo = computar_area_retangulo(coordenada_X,coordenada_Y)

    //se a área for negativa
    if(area_do_retangulo < 0){
        
        io.print('Os valores das coordenadas para formar um retângulo são inválidos.')
    }
    //se não for ele informa a área
    else{
        
        io.print(`A área do retângulo com coordenadas X = [${coordenada_X}] e coordenadas Y = [${coordenada_Y}] é = [${area_do_retangulo.toFixed(2)}].`)
    }
}

main()