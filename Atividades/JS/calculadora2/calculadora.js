let n1, n2, opcao, resultado;

function calculadora () {
    if (opcao == 1) {
        return n1 + n2;
    }
    else if (opcao == 2) {
        return n1 - n2;
    }
    else if (opcao == 3) {
        return n1 * n2;
    }
    else {
        return n1 / n2;
    }
}
function obter () {
    opcao = Number(window.prompt('Escolha o número da operação: \n \n 1 para somar \n 2 para subtrair \n 3 para multiplicar \n 4 para dividir \n 0 para sair \n \n Digite o número da operação:'));
    }

do {

    obter();
    
while (opcao > 4 || isNaN(opcao)) {
        window.alert('Número de operação inválido')
        obter();
}

if (opcao == 0) {
    window.alert('Você escolheu a opção sair');
     break;
}
else {
n1 = Number(window.prompt('Digite o primerio valor:'));
n2 = Number(window.prompt('Digite o segundo valor:'));     
}  

 switch (opcao) {
    case 1:
         resultado = calculadora(n1, n2);
         window.alert('o resultado dessa operação é igual a: ' + resultado)
         break;
    case 2: 
         resultado = calculadora(n1, n2);
         window.alert('o resultado dessa operação é igual a: ' + resultado)
        break;
    case 3:
         resultado = calculadora(n1, n2);
         window.alert('o resultado dessa operação é igual a: '+ resultado)
      break;
    case 4:
         resultado = calculadora(n1, n2);
         window.alert('O resultado dessa operação é igual a: ' + resultado)
        break;
 }
} while(opcao != 0)