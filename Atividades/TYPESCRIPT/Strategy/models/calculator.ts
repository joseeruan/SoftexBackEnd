import { Strategy } from "../interface/iStrategy";

export class Calculator {
  private strategy: Strategy;

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }
  public calcular(n1: number, n2: number): number | undefined {
    if (this.strategy) {
      let result = this.strategy.execute(n1, n2);
      console.log(this.strategy.toString(n1, n2, result));
      return result;
    } else {
      console.log("Estratégia não definida.");
      return undefined;
    }
  }
}
