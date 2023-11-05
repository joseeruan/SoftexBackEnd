const input = require('readline-sync');
let n1, n2, opcao, resultado;
do {
function somar (n1, n2) {
    return n1 + n2;
}
function subtrair (n1, n2) {
    return n1 - n2;
}  
function multiplicar (n1, n2) {
    return n1 * n2;
}
function dividir (n1,n2) {
    return n1 / n2;
}

n1 = input.questionInt('Digite um número: ');
n2 = input.questionInt('Digite outro número: ');
console.log('Escolha 1 para somar, 2 para subtrair, 3 para multiplicar, 4 para dividir e 0 para sair');
opcao = input.questionInt('Digite o número da operacao: ')

switch (opcao) {
    case 1:
      resultado = somar(n1, n2);
      console.log('o resultado dessa operação é igual a: ', resultado)
      break;
    case 2: 
     resultado = subtrair(n1, n2);
     console.log('o resultado dessa operação é igual a: ', resultado)
     break;
    case 3:
      resultado = multiplicar(n1,n2);
      console.log('o resultado dessa operação é igual a: ', resultado)
      break;
    case 4:
      resultado = dividir(n1,n2);
      resultado = Math.ceil(resultado);
      console.log('O resultado dessa operação é igual a: ', resultado)
      break;
    default:
        // caso o número de operação seja inexistente:
        console.log('O resultado dessa operação é igual a : 0')
}
     verificar = input.question('Responda com Sim/Não. Voce deseja fazer outra operação? ')
} while (verificar?.toLowerCase() == 'sim');