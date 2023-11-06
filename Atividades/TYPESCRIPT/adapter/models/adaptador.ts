import { Pato } from "./pato";
import { iGalinha } from "../interface/iGalinha";

export class AdaptarPato implements iGalinha {
  public pato: Pato;

  constructor(pato: Pato) {
    this.pato = pato;
  }

  cacarejar(): string {
    return "Coc";
  }

  ciscar(): string {
    return "Pato está ciscando";
  }
}
