export class SistemaSeguranca {
  private static instance: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senha-secreta";

  private constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instance) {
      SistemaSeguranca.instance = new SistemaSeguranca();
    }
    return SistemaSeguranca.instance;
  }
  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à base secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta!");
    }
  }
}
