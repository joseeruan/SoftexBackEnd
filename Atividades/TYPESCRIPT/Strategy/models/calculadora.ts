import { Multiplicar } from "./multiplicar";
import { Somar } from "./somar";
import { Subtrair } from "./subtrair";

export class Calculadora {
  public calcular(n1: number, n2: number, operacao: string) {
    operacao = operacao.toLowerCase();

    if (operacao === "somar") {
      const somar = new Somar();
      let resultado = somar.execute(n1, n2);
      console.log(somar.toString(n1, n2, resultado));
    } else if (operacao === "multiplicar") {
      const multiplicar = new Multiplicar();
      let resultado = multiplicar.execute(n1, n2);
      console.log(multiplicar.toString(n1, n2, resultado));
    } else if (operacao === "subtrair") {
      const subtrair = new Subtrair();
      let resultado = subtrair.execute(n1, n2);
      console.log(subtrair.toString(n1, n2, resultado));
    } else {
      console.log("Operação inválida");
    }
  }
}
