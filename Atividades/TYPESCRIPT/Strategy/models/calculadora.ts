import { Strategy } from "../interface/iStrategy";

export class Calculadora {
  private strategy: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }
  calcular(n1: number, n2: number): number | undefined {
    if (this.strategy) {
      return this.strategy.execute(n1, n2);
    } else {
      console.log("Estratégia não definida.");
    }
  }
}
