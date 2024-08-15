import { cpu } from "./cpu";
import { memory } from "./memory";

export interface SystemInfo {
    cpu: cpu;
    memory: memory;
}
