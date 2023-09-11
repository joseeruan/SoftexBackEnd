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
