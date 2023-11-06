import { DecoratorSanduiche } from "./decoratorSanduiche";

export class DecoratorFrangoDecorator extends DecoratorSanduiche {
  getPreco(): number {
    return this.sanduiche.getPreco() + 4.5;
  }

  getDescricao(): string {
    return this.sanduiche.getDescricao() + `\n\tFrango assado`;
  }
}
