'use client';

import { useEffect, useState } from 'react';
import SystemComponent from '../SystemComponent/system-component';
import CPUComponent from '../CPU/cpu-body';
import { SystemInfo } from '@/app/types/system-info';
import MemoryComponent from '../Memory/memory-body';
import Loading from '../Loading/loading';
import toast from 'react-hot-toast';
import DiskComponent from '../Disk/disk-body';
import { Emojis } from '@/app/enums/emojis';
import OSComponent from '../OS/os';
import { getFormattedUptime } from '@/utils/calculation-utils';
import NetworkComponent from '../Network/network-info.card';

const SystemInfoCard = () => {
    const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);

    useEffect(() => {
        const eventSource = new EventSource('/api/system-info-sse');

        eventSource.onmessage = (event) => {
            console.log('Received system info', event);
            toast.success('System info updated');
            setSystemInfo(JSON.parse(event.data));
        };

        eventSource.onerror = (error) => {
            console.error('EventSource failed:', error);
            toast.error('Failed to connect to the server');
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <>
            <div className="px-6 py-4 mb-4 bg-slate-900 rounded-xl min-w-56">
                <div className="font-bold text-xl mb-2 text-center">
                    {Emojis.Stats} System Stats
                </div>
                {systemInfo && (
                    <div className="text-center shadow-sm">
                        <p className="text-sm font-light text-gray-400 italic">
                            <b>{Emojis.Uptime} Uptime</b>:{' '}
                            {getFormattedUptime(systemInfo.uptimeInSeconds)}
                        </p>
                    </div>
                )}
            </div>
            <div className="w-full max-w-4xl md:max-w-3xl sm:max-w-2xl sm:w-11/12 rounded-xl overflow-hidden shadow-lg bg-slate-900 mx-auto">
                {!systemInfo ? (
                    <Loading />
                ) : (
                    <>
                        <SystemComponent title="CPU" emoji={Emojis.CPU}>
                            <CPUComponent cpuInfo={systemInfo.cpu} />
                        </SystemComponent>
                        <SystemComponent title="Memory" emoji={Emojis.Memory}>
                            <MemoryComponent memoryInfo={systemInfo.memory} />
                        </SystemComponent>
                        <SystemComponent title="Disk" emoji={Emojis.Disk}>
                            <DiskComponent disks={systemInfo.disks} />
                        </SystemComponent>
                        <SystemComponent title="OS" emoji={Emojis.OS}>
                            <OSComponent osInfo={systemInfo.os} />
                        </SystemComponent>
                        <SystemComponent title="Network" emoji={Emojis.Network}>
                            <NetworkComponent
                                networkData={systemInfo.network}
                            />
                        </SystemComponent>
                    </>
                )}
            </div>
        </>
    );
};
export default SystemInfoCard;
