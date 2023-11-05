let nome, idade, id2023;

function calcularIdade () {
    nome = window.prompt('Qual o seu nome?');
    idade = Number(window.prompt('Em que ano você nasceu?'));
try {

if (idade > 1922 && idade < 2021 || isNaN(idade)){
        idade = 2021 - idade
        id2023 = idade + 1
        window.alert('A sua idade é: ' + idade + '\n'+ 'Em 2022 você terá: ' + id2023 + ' anos');
    }
     else if ( isNaN(idade)) {
       throw new Error("Digite um valor númerico");
        }
    else if (idade > 2021) {
        throw new Error("Digite uma data menor que 2022");
    }
    else if (idade < 1922 && idade > 0) {
        throw new Error("Digite uma data maior que 1921");
    }
    else {
        throw new Error("Digite um valor positivo");
    }
 }
 catch (error) {
 window.alert(error);
} 
    while (idade < 1922 || idade > 2021 || isNaN(idade)) {
        calcularIdade();
    }
}
 calcularIdade();