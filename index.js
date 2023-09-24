import { Agencia } from "./model/agencia.js";
import { Cliente } from "./model/cliente.js";
import { Conta } from "./model/conta.js";
import { Endereco } from "./model/endereco.js";


let endAg = new Endereco('PE', "Recife", "São José", "Rua da Guia", 1000, 305, "40050-030");
let agencia01 = new Agencia("Softex", 1234, "8132227777", "agsoftex@banconode.com", endAg);


let enderecoCliente1 = new Endereco('PE', "Recife", "Boa Viagem", "Rua dos Coqueiros", 123, null, "51234-567");
let cliente1 = new Cliente("João Silva", "222.333.444-55", new Date("1990-05-15").toLocaleDateString(), "5555678", "joao@email.com", "81987654321", enderecoCliente1);
let contaCliente1 = new Conta(cliente1, 765432, agencia01, 2100.75);

let enderecoCliente2 = new Endereco('PE', "Recife", "Madalena", "Av. Caxangá", 456, "Ap 502", "50789-012");
let cliente2 = new Cliente("Maria Santos", "777.888.999-11", new Date("1988-12-25").toLocaleDateString(), "9998877", "maria@email.com", "81980001122", enderecoCliente2);
let contaCliente2 = new Conta(cliente2, 765455, agencia01, 4500.25);

contaCliente1.sacar(100);
contaCliente1.tranferir(500, contaCliente2);
contaCliente2.pagar(124.53);