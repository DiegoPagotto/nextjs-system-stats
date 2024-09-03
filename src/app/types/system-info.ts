import { cpu } from './cpu';
import { disk } from './disk';
import { memory } from './memory';

export interface SystemInfo {
    cpu: cpu;
    memory: memory;
    disks: disk[];
}
