/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.
Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array. 
*/
function buscarElemento(lista, elementoBuscado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elementoBuscado) {
            return console.log(`O elemento ${elementoBuscado} foi encontrado na posição ${i}`);
        }
    }
    return console.log(`O elemento ${elementoBuscado} não foi encontrado na lista`);
}

let numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]

buscarElemento(numeros, 20)
