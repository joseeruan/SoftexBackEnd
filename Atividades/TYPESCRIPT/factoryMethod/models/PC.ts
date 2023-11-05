import { Computer } from "./Computer";

export class PC extends Computer {
    private monitor: string;

    constructor(
        ram: number,
        ssd: number,
        cpu: number,
        tipo: number,
        descricao: string,
        preco: number,
        monitor: string) {
        super(ram, ssd, cpu, tipo, descricao, preco);
        this.monitor = monitor;
    }

    getMonitor(): string {
        return this.monitor;
    }
    
    toString(): string {
        return `${super.toString()}, Monitor: ${this.monitor}`;
    }
}
