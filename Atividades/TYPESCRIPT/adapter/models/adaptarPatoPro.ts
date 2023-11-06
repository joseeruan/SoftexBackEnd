import { AdaptarPato } from "./adaptador";
import { Pato } from "./pato";

export class AdaptadorPatoPro {
  static pro() {
    const pato = new Pato();
    const adaptador = new AdaptarPato(pato);

    console.log("Pato:");
    console.log(pato.dormir());
    console.log(pato.nadar());

    console.log("Adaptador (Pato como Galinha):");
    console.log(adaptador.cacarejar());
    console.log(adaptador.ciscar());
  }
}
