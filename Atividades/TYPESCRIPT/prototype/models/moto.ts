import { Veiculo } from "./veiculo";

export class Moto extends Veiculo {
  private temBagageiro: boolean;

  constructor(
    modelo: string,
    marca: string,
    cor: string,
    qtdRodas: number,
    temBagageiro: boolean
  ) {
    {
      super(modelo, marca, cor, qtdRodas);
      this.temBagageiro = temBagageiro;
    }
  }
  represent() {
    return `${super.represent()}, temBagageiro: ${this.temBagageiro}`;
  }
}
