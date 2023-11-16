import { Strategy } from "../interface/iStrategy";

export class Multiply implements Strategy {
  public execute(n1: number, n2: number): number {
    const result = n1 * n2;
    return result;
  }
  public toString(n1: number, n2: number, result: number): string {
    return ` Operação escolhida: Multiplicação\n\nNúmeros: ${n1} x ${n2}\nResultado = ${result.toFixed(2)}\n`;
  }
}
