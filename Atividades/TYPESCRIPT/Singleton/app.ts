import {SistemaSeguranca} from "./models/baseSecreta"


const agenteSecreto = SistemaSeguranca.getInstance();
agenteSecreto.acessarBaseSecreta("senha-incorreta"); // Acesso negado
agenteSecreto.acessarBaseSecreta("senha-secreta"); // Acesso concedido