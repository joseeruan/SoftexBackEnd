import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
  private numeroPortas: number;

  constructor(
    tipo: string,
    modelo: string,
    marca: string,
    cor: string,
    qtdRodas: number,
    numeroPortas: number
  ) {
    super(tipo, modelo, marca, cor, qtdRodas);
    this.numeroPortas = numeroPortas;
  }

  represent() {
    return `${super.represent()}numeroPortas: ${this.numeroPortas}
    `;
  }
}
