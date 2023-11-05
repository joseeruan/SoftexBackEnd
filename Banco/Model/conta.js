import { Transacao } from "./transacao.js";
import { TIPOTRANS} from "./tipoTransacao.js";

export class Conta {

    #cliente;
    #numero;
    #agencia;
    #dataCriacao;
    #saldo;
    #status;
    #transacoes;

    static #contador = 0;

    constructor(cliente, numero, agencia, saldo) {

        if (this.constructor == Conta) {
            throw new Error('Não é possível instanciar a classe Conta');
        }

        else {
        this.#cliente = cliente;
        this.#numero = numero;
        this.agencia = agencia;
        this.#dataCriacao = Date.now();
        this.#saldo = saldo;
        this.#status = true;
        this.#transacoes = [];
        Conta.#contador++;
        }

    }

    static qtdContas () {
        return `quantidade de contas criadas: ${Conta.#contador}` 
    }

    depositar(valor) {
        this.#saldo += valor;

        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);

        return console.log(`Depósito efetuado com sucesso.\nO seu novo saldo é de: ${this.saldo}`)
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;

            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);

            return console.log(`Saque no valor de ${valor} efetuado com sucesso.\nO seu novo saldo é de: ${this.saldo}`)

        } else {
            throw new Error('Saldo insuficiente ' + valor + ' é maior do que o saldo ' + this.saldo + '.');
        }
    }

    tranferir(valor, contaDest) {
        if (this.saldo >= valor) {
            this.saldo -= valor;

            let trans = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, contaDest.cliente.nome, '-');
            this.transacoes.push(trans);

            console.log(`A transferência no valor de ${valor} para ${contaDest.cliente.nome} foi efetuada com sucesso.\nO seu novo saldo é ${this.saldo}`)

            return this.receberTransferencia(valor, this.#cliente.nome, contaDest)
            
        }
         else {

            throw new Error('Erro: Saldo insuficiente' + valor + ' para transferir, seu saldo é ' + this.saldo + '.');

        }
    }

    receberTransferencia (valor, contaOrigin, contaDest) {
        contaDest.saldo += valor;

        let transDest = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, this.#cliente.nome, '+');
        contaDest.transacoes.push(transDest);

        return console.log(`${contaDest.cliente.nome}, você recebeu uma transferência no valor de ${valor} de ${contaOrigin}.\nO seu novo saldo é de ${contaDest.saldo}` )       
    }
    pagar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;

            let trans = new Transacao(TIPOTRANS.pagamento, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);

        } else {
            throw new Error('Saldo insuficiente. ' + valor + ' é maior do que o saldo ' + this.saldo + ' para realizar o pagamento.');
        }
    }

    mostrarSaldo() {
        return this.saldo;
    }

    toString() {
        return "\tAgência: " + this.agencia.numero + " | Conta: " + this.#numero + "\n";
    }
    
    static get contador() {
        return Conta.#contador;
    }

    mostrarExtrato() {
        let extrato = "\t\tEXTRATO DE CONTA BANCÁRIA\n";
        extrato += "\t-------------------------------------------\n";
        extrato += this.toString();
        extrato += this.#cliente.toString();
        extrato += "\t-------------------------------------------\n";
        extrato += "\tDATA\t\tHISTÓRICO\t VALOR(R$)\n";
        for (const trans of this.transacoes) {
            extrato += trans.toString();
        }
        extrato += "\t-------------------------------------------\n";
        extrato += "\tSaldo\t\t" + this.saldo + "\n";
        return extrato;
    }
}

