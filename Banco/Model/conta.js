import { Transacao } from "./transacao.js";
import { TIPOTRANS} from "./tipoTransacao.js";

export class Conta {
    constructor(cliente, numero, agencia, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = Date.now();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }

    depositar(valor) {
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.debito, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        } else {
            throw new Error('Erro: Saldo insuficiente ' + valor + ' é maior do que o saldo ' + this.saldo + '.');
        }
    }

    tranferir(valor, contaFav) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaFav.saldo += valor;
            let transFav = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, this.cliente.nome, '+');
            contaFav.transacoes.push(transFav);
            let trans = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, contaFav.cliente.nome, '-');
            this.transacoes.push(trans);
        } else {

            throw new Error('Erro: Saldo insuficiente' + valor + ' para transferir, seu saldo é ' + this.saldo + '.');
        }
    }


    pagar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.pagamento, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        } else {
            // Lançar um erro
            throw new Error('Erro: Saldo insuficiente ' + valor + ' é maior do que o saldo ' + this.saldo + ' para realizar o pagamento.');
        }
    }

    mostrarSaldo() {
        return this.saldo;
    }

    toString() {
        return "\tAgência: " + this.agencia.numero + " | Conta: " + this.numero + "\n";
    }


    mostrarExtrato() {
        let extrato = "\t\tEXTRATO DE CONTA BANCÁRIA\n";
        extrato += "\t-------------------------------------------\n";
        extrato += this.toString();
        extrato += this.cliente.toString();
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