const imprimirResultado = (n1, n2, op, resultado) => {
    console.log(`O seu resultado é igual a: ${n1} ${op} ${n2} = ${resultado}`);
}
function calcular(n1, n2, op) {
    const OPERADOR = {
        multiplicar: 'x',
        dividir: '/',
        somar: '+',
        subtrair: '-'
    }
    switch (op) {
        case OPERADOR.somar:
            return n1 + n2;
        case OPERADOR.subtrair:
            return n1 - n2;
        case OPERADOR.multiplicar:
            return n1 * n2;
        case OPERADOR.dividir:
            return n1 / n2;
        default:
            throw new Error('Número de operação inexistente.');
    }

}

function runCalculadora() {
    do {
        try {
            let n1 = parseFloat(prompt('Insira o primeiro número:'));
            let n2 = parseFloat(prompt('Insira o segundo número:'));
            if (isNaN(n1) || isNaN(n2)) {
                throw new Error('Digite um número válido positivo.');
            }

            let op = prompt('Insira a operação:\n+ para somar\n- para subtrair\nx para multiplicar\n/ para dividir');
            resultado = calcular(n1, n2, op);
            imprimirResultado(n1, n2, op, resultado);
        }
        catch (error) {
            console.log(error);
        }
        continuar = prompt('Responda com Sim ou Não. Você deseja fazer outro cálculo?').toLowerCase();
    } while (continuar === 'sim')
}
runCalculadora();


