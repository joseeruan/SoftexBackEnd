// Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.
//Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

let animais = [
    ["Leão", "Felino", 5],
    ["Elefante", "Mamífero", 10],
    ["Tigre", "Felino", 7],
    ["Girafa", "Mamífero", 4]
];

function exibirAnimal () {
let continuar;
do {
try { 
let verificar = prompt('Você deseja ver as informações de qual animal?').toLowerCase()
verificar = verificar[0].toUpperCase() + verificar.slice(1)

for (let i = 0; i < animais.length; i++ ) {
    for (let b = 0; b < animais.length; b++) {
        if (animais[i][0] === verificar) {
            console.log("Nome: " + verificar);
            console.log("Espécie: " + animais[i][1]);
            console.log("Idade: " + animais[i][2]);
            break;
        }
        else {
            throw new Error(`Não temos informações sobre ${verificar} em nosso banco de dados`)
        }
    }
  }
}
catch (error) {
    console.log(error)
}
    continuar = prompt('Responda com Sim ou Não. Você deseja verificar informações sobre outro animal?').toLowerCase()
} while(continuar === 'sim')
} 
exibirAnimal()


