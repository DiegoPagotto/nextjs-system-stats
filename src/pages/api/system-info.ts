import type { NextApiRequest, NextApiResponse } from 'next';
import { getSystemInfo } from '@/utils/system-info-utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const systemInfo = await getSystemInfo();
        res.status(200).json(systemInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch system information' });
    }
}
