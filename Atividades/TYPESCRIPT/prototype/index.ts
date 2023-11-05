import { Aplicacao } from "./models/aplicacao";

const minhaApp = new Aplicacao();

minhaApp.criarMoto("Esportiva", "Kawasaki", "Verde", 2, true);
minhaApp.criarMoto("Cruiser", "Harley-Davidson", "Preto", 2, false);
minhaApp.criarMoto("Street", "Honda", "Vermelha", 2, true);
minhaApp.criarCarro("Sedan", "Toyota", "Prata", 4, 4);
minhaApp.criarCarro("Hatchback", "Ford", "Azul", 4, 2);
minhaApp.criarCarro("SUV", "Honda", "Preto", 4, 4);

const clonarVeiculos = minhaApp.clonarVeiculos();
console.log(minhaApp);
console.log(clonarVeiculos);
