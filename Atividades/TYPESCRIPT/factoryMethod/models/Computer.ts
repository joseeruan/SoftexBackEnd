import { iProduto } from "../interface/iProduto";


export abstract class Computer implements iProduto {
    private ram: number;
    private ssd: number;
    private cpu: number;
    private tipo: number;
    private preco: number;
    private descricao: string;

    constructor(ram: number, ssd: number, cpu: number, tipo: number, descricao: string, preco: number) {
        this.ram = ram;
        this.ssd = ssd;
        this.cpu = cpu;
        this.tipo = tipo;
        this.descricao = descricao;
        this.preco = preco;
    }

    getPreco(): number {
        return this.preco;
    }

    getDescricao(): string {
        return this.descricao;
    }

    getTipo(): number {
        return this.tipo;
    }

    setTipo(tipo: number): number {
        this.tipo = tipo;
        return this.tipo;
    }
    setDescricao(descricao: string): string {
        this.descricao = descricao;
        return this.descricao;
    }
    setPreco(preco: number): number {
        this.preco = preco;
        return this.preco;
    }
    toString(): string {
        return `Tipo: ${this.tipo}, 
        Descrição: ${this.descricao}, 
        RAM: ${this.ram}GB, 
        SSD: ${this.ssd}GB,
        CPU: ${this.cpu}GHz, 
        Preço: R$ ${this.preco}`;
    }
}
