import { Strategy } from "../interface/iStrategy";

export class Subtrair implements Strategy {
  public execute(n1: number, n2: number) {
    const resultado = n1 - n2;

    return resultado;
  }

  public toString(n1: number, n2: number, resultado: number): string {
    return ` Operação escolhida: Subtração
        Números: ${n1} - ${n2}
        Resultado = ${resultado}`;
  }
}
