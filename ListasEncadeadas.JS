class No {
    constructor(nome, idade, filho) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    addPessoa(nome, idade, filho) {
        const novoNo = new No(nome, idade, filho);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
    }
}

const lista = new ListaEncadeada();
lista.addPessoa("José", 35, { nome: "Carlos", idade: 9, filho: null });
lista.addPessoa("Gustavo", 22, null);
lista.addPessoa("Fernanda", 33, null);

console.log(lista);
    