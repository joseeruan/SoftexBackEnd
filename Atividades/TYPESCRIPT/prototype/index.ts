import { Aplicacao } from "./models/aplicacao";
import { Carro } from "./models/carro";
const minhaApp = new Aplicacao();

minhaApp.criarMoto("Moto","Esportiva", "Kawasaki", "Verde", 2, true);
minhaApp.criarMoto("Moto","Cruiser", "Harley-Davidson", "Preto", 2, false);
minhaApp.criarMoto("Moto","Street", "Honda", "Vermelha", 2, true);
minhaApp.criarCarro("Carro","Sedan", "Toyota", "Prata", 4, 4);
minhaApp.criarCarro("Carro","Hatchback", "Ford", "Azul", 4, 2);
minhaApp.criarCarro("Carro","SUV", "Honda", "Preto", 4, 4);

const clonarVeiculos = minhaApp.clonarVeiculos();

minhaApp.getVeiculos ();
