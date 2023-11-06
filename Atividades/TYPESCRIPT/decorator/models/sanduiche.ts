import { iSanduiche } from "../interface/iSanduiche";

export class Sanduiche implements iSanduiche {
  getPreco(): number {
    return 0;
  }
  getDescricao(): string {
    return `Sanduiche de frango \n
     Ingredientes: \n\n`;
  }

  static getTiposSanduiches(): string {
    return `Os sanduiches de Carne, Bacon, Queijo Ralado custam 7.49.`;
  }
}
