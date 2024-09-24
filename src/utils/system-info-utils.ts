import si from 'systeminformation';
import { cpu } from '@/app/types/cpu';
import { memory } from '@/app/types/memory';
import { disk } from '@/app/types/disk';
import { bytesToGigaBytes } from './calculation-utils';

export const getSystemInfo = async () => {
    const cpu = await getCpuInfo();
    const memory = await getMemoryInfo();
    const network = await getNetworkInfo();

    const gpu = await si.graphics();
    await getCurrentLoad(cpu);
    const temp = await si.cpuTemperature();
    const disks = await getDiskInfo();
    const os = await si.osInfo();
    const uptimeInSeconds = await si.time().uptime;

    return {
        cpu,
        gpu,
        memory,
        temp,
        disks,
        os,
        uptimeInSeconds,
        network,
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

const getDiskInfo = async () => {
    const diskLayout = await si.diskLayout();
    const fsSize = await si.fsSize();
    return diskLayout.map((disk, index) => ({
        device: disk.device,
        type: disk.type,
        name: disk.name,
        vendor: disk.vendor,
        size: Number(bytesToGigaBytes(disk.size)), // Convert size to number
        used: bytesToGigaBytes(fsSize[index]?.used) || 0,
        available:
            bytesToGigaBytes(fsSize[index]?.size - fsSize[index]?.used) || 0,
        mount: fsSize[index]?.mount || '',
    })) as unknown as disk[];
};

const getNetworkInfo = async () => {
    const networkInterfaces = await si.networkInterfaces();
    const networkStats = await si.networkStats();
    return {
        interfaces: networkInterfaces,
        stats: networkStats,
    };
};
