import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
  private numeroPortas: number;

  constructor(
    modelo: string,
    marca: string,
    cor: string,
    qtdRodas: number,
    numeroPortas: number
  ) {
    super(modelo, marca, cor, qtdRodas);
    this.numeroPortas = numeroPortas;
  }

  represent() {
    return `${super.represent()}, numeroPortas: ${this.numeroPortas}`;
  }
}
