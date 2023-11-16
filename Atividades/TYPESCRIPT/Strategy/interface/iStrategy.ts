export interface Strategy {
    execute(n1: number, n2: number): number;
    toString(n1: number, n2: number, resultado: number): string
}