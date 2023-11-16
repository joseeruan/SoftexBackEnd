import { Strategy } from "../interface/iStrategy";

export class Somar implements Strategy {
  public execute(n1: number, n2: number) {
    const resultado = n1 + n2;

    return resultado;
  }

  public toString(n1: number, n2: number, resultado: number): string {
    return ` Operação escolhida: Soma
    Números: ${n1} + ${n2}
    Resultado = ${resultado}`;
  }
}
