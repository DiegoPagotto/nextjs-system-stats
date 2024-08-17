import { cpuCore } from "./cpu-core";

export interface cpu {
    manufacturer: string;
    brand: string;
    speed: number;
    cores: cpuCore[];
    physicalCores: number;
    processors: number;
}