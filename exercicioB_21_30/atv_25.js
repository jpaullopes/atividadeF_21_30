/** Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo 
 * deve escrever uma mensagem de permissão de acesso ou não.*/

import * as io from './io.js'

//confirma se a senha do usuário é a mesma que a senha que está sendo informada
function validar_permissao(senha_informada,senha_usuario){

    //se for ele permite o acesso
    if(senha_usuario === senha_informada){
          io.print(
`--SENHA CORRETA--
[ACESSO PERMITIDO]`)
    }
    //se não for ele nega o acesso
    else{
        io.print(
`--SENHA INCORRETA--
  [ACESSO NEGADO]`)
    }

}

function main(){

    const senha_do_usuario = '1234'
    const senha_fornecida = io.input('Digite a senha: ') 

    validar_permissao(senha_do_usuario,senha_fornecida)
}

main()