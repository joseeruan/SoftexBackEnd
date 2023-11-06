import { iPato } from "../interface/iPato";

export class Pato implements iPato {
  static patoComum = new Pato();
  dormir(): string {
    return "Pato está dormindo";
  }
  nadar(): string {
    return "Pato está nadando";
  }
}
