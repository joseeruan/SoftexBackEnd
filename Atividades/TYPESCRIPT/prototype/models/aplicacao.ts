import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";

export class Aplicacao {
  veiculos: Veiculo[] = [];

  constructor() {
    this.veiculos = [];
  }

  getVeiculos () {
    for(const veiculo of this.veiculos) {
      console.log(veiculo.represent())
  }
}
  criarCarro(
    tipo: string,
    modelo: string,
    marca: string,
    cor: string,
    qtdRodas: number,
    numeroPortas: number
  ) {
    const carro = new Carro(tipo, modelo, marca, cor, qtdRodas, numeroPortas);
    this.veiculos.push(carro);
  }

  criarMoto(
    tipo: string,
    modelo: string,
    marca: string,
    cor: string,
    qtdRodas: number,
    temBagageiro: boolean
  ) {
    const moto = new Moto(tipo, modelo, marca, cor, qtdRodas, temBagageiro);
    this.veiculos.push(moto);
  }

  clonarVeiculos() {
    const clonerVeiculos: Veiculo[] = [];
    for (const veiculo of this.veiculos) {
      const clonar = veiculo.clone();
      clonerVeiculos.push(clonar);
    }

    return clonerVeiculos;
  }
}
