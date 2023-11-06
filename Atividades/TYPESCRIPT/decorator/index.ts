import { Sanduiche } from "./models/sanduiche";
import { DecoratorFrangoDecorator } from "./models/frangoassado";
import { DecoratorPepperoni } from "./models/pepperoni";
import { DecoratorQueijoMussarelaRalado } from "./models/queijomussarelaralado";

const sanduiche1 = new Sanduiche();
const addPepperoni: Sanduiche = new DecoratorPepperoni(sanduiche1);
const addQueijoMussarela: Sanduiche = new DecoratorQueijoMussarelaRalado(addPepperoni);
const addFrangoDecorator: Sanduiche = new DecoratorFrangoDecorator(addQueijoMussarela);

console.log(`${addFrangoDecorator.getDescricao()} \n\npreço: ${addFrangoDecorator.getPreco().toFixed(2)}`);
console.log(Sanduiche.getTiposSanduiches())