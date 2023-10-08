class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    ligar() {
        console.log("Ligando...");
    }

    desligar() {
        console.log("Desligando...");
    }

    acelerar() {
        console.log("Acelerando...");
    }

    frear() {
        console.log("Freando...");
    }
}


class Moto {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
        ligar() {
            console.log("Ligando...");
        }
        desligar() {
            console.log("Desligando...");
        }

        acelerar() {
            console.log("Acelerando...");
        }

        frear() {
            console.log("Freando...");
        }
}

class Computador {
    constructor(marca, modelo, ) {
}
    ligar () {
        console.log("Ligando...");
    }

    desligar () {
        console.log("Desligando...");
    }

    calcularPotencia () {
        throw new Error("Não é possivel calcular a potência porque o tamanho do computador não está definido");
    }
}

class Notebook extends Computador {
    constructor(marca, modelo, tamanho, ram, processador, tamanhoMonitor) {
        super(marca, modelo);
        this.tamanho = tamanho;
        this.ram = ram;
        this.processador = processador;
        this.tamanhoMonitor = tamanhoMonitor;
        
}
    calcularPotencia () {
        return this.tamanho * this.ram * this.processador;
    }
}

class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    emitirSom() {
        throw new Error("Método emitirSom não implementado");
    }
}

class Cachorro extends Animal {
    constructor(nome, especie, raca) {
        super(nome, especie);
        this.raca = raca;
    }

    emitirSom() {
        return "Au au!";
    }
}

const moto = new Moto("Honda", "CG 160", 2023, "Vermelha");
const carro = new Carro("Fiat", "Argo", 2023, "Branco");
const cachorro = new Cachorro("Totó", "Cão", "Poodle");
const notebook = new Notebook("Dell", "Inspiron 15", 15.6, 8, "Intel Core i5", 1920);


console.log(moto);
