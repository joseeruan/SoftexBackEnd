import { Computer } from "./Computer";

export class Server extends Computer {
    private sistemaRaid: string; 

    constructor(ram: number, ssd: number, cpu: number, tipo: number, descricao: string, preco: number, sistemaRaid: string) {
        super(ram, ssd, cpu, tipo, descricao, preco);
        this.sistemaRaid = sistemaRaid;
    }

    getSistemaRaid(): string {
        return this.sistemaRaid;
    }
    toString(): string {
        return `${super.toString()}`;
    }
}
