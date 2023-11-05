import { factoryCreate } from "./models/factory";

const pc1 = factoryCreate.createPC(16, 512, 3.0, 1, "PC Gamer", 2000, "Monitor LED 27");
const server1 = factoryCreate.createServer(64, 2048, 3.5, 2, "Servidor de Dados", 5000, "Sistema RAID 5");

