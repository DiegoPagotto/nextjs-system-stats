import type { NextApiRequest, NextApiResponse } from 'next';
import si from 'systeminformation';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const cpu = await si.cpu();
        const mem = await si.mem();
        const memLayout = await si.memLayout();
        const memoryModules = memLayout.length
        const memoryModuleInfo = memoryModules > 0 ? memLayout[0] : null;
        const gpu = await si.graphics();
        const currentLoad = await si.currentLoad();
        const temp = await si.cpuTemperature();

        res.status(200).json({
            cpu,
            gpu,
            mem,
            memoryModules,
            memoryModuleInfo,
            currentLoad,
            temp,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch system information' });
    }
}
