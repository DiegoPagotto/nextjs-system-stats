import { cpu } from './cpu';
import { disk } from './disk';
import { memory } from './memory';
import { os } from './os';

export interface SystemInfo {
    cpu: cpu;
    memory: memory;
    disks: disk[];
    os: os;
}
