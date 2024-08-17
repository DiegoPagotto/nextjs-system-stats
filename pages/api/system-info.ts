import { cpu } from '@/app/types/cpu';
import { memory } from '@/app/types/memory';
import type { NextApiRequest, NextApiResponse } from 'next';
import si from 'systeminformation';

const getCpuInfo = async () => {
    const cpu = await si.cpu();

    return {
        manufacturer: cpu.manufacturer,
        brand: cpu.brand,
        speed: cpu.speed,
        cores: cpu.cores,
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

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const cpu = await getCpuInfo();
        const memory = await getMemoryInfo();

        const gpu = await si.graphics();
        const currentLoad = await si.currentLoad();
        const temp = await si.cpuTemperature();

        res.status(200).json({
            cpu,
            gpu,
            memory,
            currentLoad,
            temp,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch system information' });
    }
}
