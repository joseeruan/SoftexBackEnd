import { Agencia } from "./Model/agencia.js";
import { Cliente } from "./Model/cliente.js";
import { Conta } from "./Model/conta.js";
import { Endereco } from "./Model/endereco.js";

let endAg = new Endereco('PE', "Recife", "Madalena", "Rua Professor Benedito Moreira", 666, 'Próximo ao supermercado', "5453-030");
let agencia01 = new Agencia("Estrela Financeira", 1555, "(555) 543-2109", "atendimento@estrelafinanceira.com");

let enderecoCliente1 = new Endereco('PE', "Recife", "Boa Viagem", "Rua dos Coqueiros", 123, null, "51234-567");
let cliente1 = new Cliente("João Silva", "222.333.444-55", new Date("1990-05-15").toLocaleDateString(), "5555678", "joao@email.com", "81987654321", enderecoCliente1);
let contaCliente1 = new Conta(cliente1, 765432, agencia01, 2100.75);

let enderecoCliente2 = new Endereco('PE', "Recife", "Madalena", "Av. Caxangá", 456, "Ap 502", "50789-012");
let cliente2 = new Cliente("Maria Santos", "777.888.999-11", new Date("1988-12-25").toLocaleDateString(), "9998877", "maria@email.com", "81980001122", enderecoCliente2);
let contaCliente2 = new Conta(cliente2, 765455, agencia01, 4500.25);



contaCliente1.sacar(100);
contaCliente1.tranferir(534, contaCliente2);
contaCliente1.pagar(434);


contaCliente2.depositar(545);
contaCliente2.depositar(434);
contaCliente2.pagar(100)
contaCliente2.pagar(544);

console.log(contaCliente2.mostrarExtrato());