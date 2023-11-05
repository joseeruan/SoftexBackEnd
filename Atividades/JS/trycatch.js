const input = require('readline-sync');

let continuar = false;
do {
    try {

        let n1, n2, op, resultado;

        n1 = input.questionInt('Digite um numero: ');
        n2 = input.questionInt('Digite outro numero: ');

        console.log('Escolha o número da operação: \n 1 para somar \n 2 para subtrair \n 3 para multiplicar \n 4 para dividir');
        op = input.questionInt('Digite o tipo da operação: ')

        switch (op) {
            case 1:
                resultado = n1 + n2;
                break;
            case 2:
                resultado = n1 - n2;
                break;
            case 3:
                resultado = n1 * n2;
                break;
            case 4:
                resultado = n1 / n2;
                break;
            default:
                // caso o número de operação seja inexistente:
                throw new Error('O Número de operação é inexistente');
        }

        console.log(`O resultado dessa operação é igual a: ${resultado}`);

    }

    catch (error) {

        console.error(error)
    }


    finally {

        let repetirCal = input.question('Você deseja repetir a operação? ').toLocaleLowerCase();

        if ((repetirCal == 'sim') || (repetirCal == 's') || (repetirCal == 'si')) {
            continuar = true;
        }

    }

} while (continuar == true)