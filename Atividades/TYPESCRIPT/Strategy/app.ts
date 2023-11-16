import { Calculadora } from "./models/calculadora";
import { Multiplicar } from "./models/multiplicar";
import { Somar } from "./models/somar";
import { Subtrair } from "./models/subtrair";

const calculadora = new Calculadora();
const somar = new Somar();
const multiplicar = new Multiplicar();
const n1 = 5;
const n2 = 3;

let resultado = calculadora.calcular(n1, n2);
console.log(resultado);

calculadora.setStrategy(multiplicar);
let resultado2 = calculadora.calcular(n1, n2);
console.log(resultado2);

calculadora.setStrategy(somar);
let resultado3 = calculadora.calcular(n1, n2);
console.log(resultado3);
