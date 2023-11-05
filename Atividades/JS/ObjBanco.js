class Banco {
    constructor(cliente, tipoConta, agencia, numeroConta)  {
    this.cliente = cliente;
    this.tipoConta = tipoConta;
    this.saldo = 0.0;
    this.agencia = agencia
    this.numeroConta = numeroConta
  
    }
    verSaldo() {
        console.log("O seu saldo é de R$",this.saldo.toFixed(2))
    }
    depositar(deposito) {
        console.log("Depósito no valor de", this.saldo += deposito, "efetuado com sucesso")
    }
    sacar(saque) {
        this.saldo -= saque
    }
    verNumeroConta() {
        console.log(`O número da conta é: ${this.numeroConta}`)
    }
}

class Cliente {
    constructor(nome, telefone, cep) {
        this.nome = nome
        this.telefone = telefone
        this.cep = cep
    }
} 

let clienteJose = new Cliente("José Ruan", "81-987872438", "50650-350")
let conta1 = new Banco(clienteJose, "Conta corrente", "12554-0", "1224")

