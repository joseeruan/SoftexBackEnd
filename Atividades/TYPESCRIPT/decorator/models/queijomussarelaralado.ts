import { DecoratorSanduiche } from "./decoratorSanduiche";

export class DecoratorQueijoMussarelaRalado extends DecoratorSanduiche {
  getPreco(): number {
    return this.sanduiche.getPreco() + 2.0;
  }
  getDescricao(): string {
    return this.sanduiche.getDescricao() + `Queijo Mussarela Ralado`;
  }
}
