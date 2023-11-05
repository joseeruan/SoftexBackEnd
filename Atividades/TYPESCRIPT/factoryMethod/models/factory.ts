import { Computer } from "./Computer";
import { PC } from "./PC";
import { Server } from "./Server";

export class factoryCreate {
    static createPC(ram: number, ssd: number, cpu: number, tipo: number, descricao: string, preco: number, monitor: string): Computer {
        return new PC(ram, ssd, cpu, tipo, descricao, preco, monitor);
    }

    static createServer(ram: number, ssd: number, cpu: number, tipo: number, descricao: string, preco: number, sistemaRaid: string): Computer {
        return new Server(ram, ssd, cpu, tipo, descricao, preco, sistemaRaid);
    }
}