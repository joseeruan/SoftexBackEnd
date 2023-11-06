import { iSanduiche } from "../interface/iSanduiche";

export abstract class DecoratorSanduiche implements iSanduiche {
  protected sanduiche: iSanduiche;

  constructor(sanduiche: iSanduiche) {
    this.sanduiche = sanduiche;
  }

  getPreco(): number {
    return this.sanduiche.getPreco();
  }

  getDescricao(): string {
    return this.sanduiche.getDescricao();
  }
}
