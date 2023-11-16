import { Strategy } from "../interface/iStrategy";

export class Multiplicar implements Strategy {
  public execute(n1: number, n2: number) {
    const resultado = n1 * n2;
    return resultado;
  }

  public toString(n1: number, n2: number, resultado: number): string {
    return ` Operação escolhida: Multiplicação
        Números: ${n1} x ${n2}
        Resultado = ${resultado}`;
  }
}
