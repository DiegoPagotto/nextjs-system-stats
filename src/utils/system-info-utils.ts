import si from 'systeminformation';
import { cpu } from '@/app/types/cpu';
import { memory } from '@/app/types/memory';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getSystemInfo = async () => {
    const cpu = await getCpuInfo();
    const memory = await getMemoryInfo();

    const gpu = await si.graphics();
    await getCurrentLoad(cpu);
    const temp = await si.cpuTemperature();

    return {
        cpu,
        gpu,
        memory,
        temp,
    };
};

const getCpuInfo = async () => {
    const cpu = await si.cpu();

    return {
        manufacturer: cpu.manufacturer,
        brand: cpu.brand,
        speed: cpu.speed,
        physicalCores: cpu.physicalCores,
        processors: cpu.processors,
    } as cpu;
};

const getMemoryInfo = async () => {
    const mem = await si.mem();
    const memLayout = await si.memLayout();
    const memoryModules = memLayout.length;
    const memoryModuleInfo = memoryModules > 0 ? memLayout[0] : null;
    return {
        total: mem.total,
        available: mem.available,
        used: mem.used,
        memoryModules: memoryModules,
        type: memoryModuleInfo?.type || '',
        voltageConfigured: memoryModuleInfo?.voltageConfigured || 0,
    } as memory;
};

const getCurrentLoad = async (cpuInfo: cpu) => {
    const currentLoad = await si.currentLoad();
    cpuInfo.cores = currentLoad.cpus;
    return currentLoad;
};
