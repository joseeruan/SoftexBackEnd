import { DecoratorSanduiche } from "./decoratorSanduiche";

export class DecoratorPepperoni extends DecoratorSanduiche {
  getPreco(): number {
    return this.sanduiche.getPreco() + 0.99;
  }
  getDescricao(): string {
    return (
      this.sanduiche.getDescricao() +
      `\tPepperoni
        `
    );
  }
}
