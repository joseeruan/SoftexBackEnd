class No {
    constructor(elemento) {
        this.elemento = elemento;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    addPessoa(elemento) {
        const novoNo = new No(elemento);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
    }
}

class Pessoa {
    constructor(nome, idade, filho) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

const pessoa1 = new Pessoa("José", 35, { nome: "Carlos", idade: 9, filho: null });
const pessoa2 = new Pessoa("Gustavo", 22, null);
const pessoa3 = new Pessoa("Fernanda", 33, null);

const lista = new ListaEncadeada();
lista.addPessoa(pessoa1);
lista.addPessoa(pessoa2);
lista.addPessoa(pessoa3);

console.log(lista);
