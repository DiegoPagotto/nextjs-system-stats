import type { NextApiRequest, NextApiResponse } from 'next';
import { getSystemInfo } from '@/utils/system-info-utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendSystemInfo = async () => {
        try {
            const systemInfo = await getSystemInfo();
            res.write(`data: ${JSON.stringify(systemInfo)}\n\n`);
        } catch (error) {
            res.write(
                `data: ${JSON.stringify({
                    error: 'Failed to fetch system information',
                })}\n\n`
            );
        }
    };

    await sendSystemInfo();

    const intervalId = setInterval(async () => {
        await sendSystemInfo();
    }, 15000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
}
