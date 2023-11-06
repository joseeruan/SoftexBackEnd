import { iGalinha } from "../interface/iGalinha";

export class Galinha implements iGalinha {
  static galinhaComum = new Galinha();

  cacarejar(): string {
    return "coc";
  }

  ciscar(): string {
    return "Galinha está ciscando";
  }

  dormir(): string {
    return "Galinha está dormindo";
  }

  botarOvo(): string {
    return "Galinha botou um ovo";
  }
}
