export abstract class Veiculo {
  private modelo: string;
  private marca: string;
  private cor: string;
  private qtdRodas: number;

  constructor(modelo: string, marca: string, cor: string, qtdRodas: number) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.qtdRodas = qtdRodas;
  }

  clone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    return ` 
     modelo: ${this.modelo}
     marca: ${this.marca}
     cor: ${this.cor}
     qtdRodas: ${this.qtdRodas}
     `;
  }
}
