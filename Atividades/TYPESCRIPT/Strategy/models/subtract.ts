import { Strategy } from "../interface/iStrategy";

export class Subtract implements Strategy {
  public execute(n1: number, n2: number): number {
    const result = n1 - n2;
    return result;
  }
  public toString(n1: number, n2: number, result: number): string {
    return ` Operação escolhida: Subtração\n\nNúmeros: ${n1} - ${n2}\nResultado = ${result.toFixed(2)}\n`;
  }
}
