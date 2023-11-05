export abstract class Veiculo {
  private tipo: string;
  private modelo: string;
  private marca: string;
  private cor: string;
  private qtdRodas: number;

  constructor(tipo: string, modelo: string, marca: string, cor: string, qtdRodas: number) {
    this.tipo = tipo;
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
   Tipo: ${this.tipo}
     modelo: ${this.modelo}
     marca: ${this.marca}
     cor: ${this.cor}
     qtdRodas: ${this.qtdRodas}
     `;
  }
}
