'use client';

import { useEffect, useState } from 'react';
import SystemComponent from '../SystemComponent/system-component';
import CPUComponent from '../CPU/cpu-body';
import { SystemInfo } from '@/app/types/system-info';
import MemoryComponent from '../Memory/memory-body';

const SystemInfoCard = () => {
    const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);

    useEffect(() => {
        async function fetchSystemInfo() {
            const response = await fetch('/api/system-info');
            const data = await response.json();
            setSystemInfo(data);
        }

        fetchSystemInfo();
    }, []);

    return (
        <div className="w-full max-w-2xl rounded overflow-hidden shadow-lg bg-slate-900">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                    System Stats
                </div>
            </div>
            {systemInfo && (
                <>
                    <SystemComponent
                        title="CPU"
                        body={<CPUComponent cpuInfo={systemInfo.cpu} />}
                    />
                    <SystemComponent
                        title="Memory"
                        body={
                            <MemoryComponent memoryInfo={systemInfo.memory} />
                        }
                    />
                </>
            )}
        </div>
    );
};
export default SystemInfoCard;
