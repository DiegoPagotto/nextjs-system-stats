'use client';

import { useEffect, useState } from 'react';
import SystemComponent from '../SystemComponent/system-component';
import {
    bytesToGigaBytes,
    calculateUsedPercentage,
} from '@/app/utils/calculation-utils';

interface SystemInfo {
    cpu: {
        manufacturer: string;
        brand: string;
        speed: string;
        cores: number;
        physicalCores: number;
        processors: number;
    };
    mem: {
        total: number;
        available: number;
        used: number;
    };
    memoryModules: number;
    memoryModuleInfo: {
        type: string;
        voltageConfigured: number;
    };
    currentLoad: {
        avgload: number;
        currentload: number;
        currentload_user: number;
        currentload_system: number;
        currentload_nice: number;
        currentload_idle: number;
        currentload_irq: number;
    };
    temp: {
        main: number;
    };
}

const SystemInfoCard = () => {
    const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
    const [ramUsage, setRamUsage] = useState<number>(0);

    useEffect(() => {
        async function fetchSystemInfo() {
            const response = await fetch('/api/system-info');
            const data = await response.json();
            setSystemInfo(data);
            calculateRamUsage(data);
        }

        fetchSystemInfo();
    }, []);

    const calculateRamUsage = (data: SystemInfo) => {
        setRamUsage(calculateUsedPercentage(data.mem.used, data.mem.total));
    };

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
                        body={
                            <div>
                                <p>
                                    <b>Manufacturer</b>:{' '}
                                    {systemInfo.cpu.manufacturer}
                                </p>
                                <p>
                                    <b>Brand</b>: {systemInfo.cpu.brand}
                                </p>
                                <p>
                                    <b>Speed</b>: {systemInfo.cpu.speed} GHz
                                </p>
                                <p>
                                    <b>Cores</b>: {systemInfo.cpu.physicalCores}
                                </p>
                                <p>
                                    <b>Threads</b>: {systemInfo.cpu.cores}
                                </p>
                            </div>
                        }
                    />
                    <SystemComponent
                        title="Memory"
                        body={
                            <div>
                                <div className="ram-usage mt-3">
                                    <p>
                                        <b>Tipo</b>:{' '}
                                        {systemInfo.memoryModuleInfo.type}
                                    </p>
                                    <p>
                                        <b>Voltagem</b>:{' '}
                                        {
                                            systemInfo.memoryModuleInfo
                                                .voltageConfigured
                                        }{' '}
                                        V
                                    </p>
                                    <p>
                                        <b>Módulos</b>:{' '}
                                        {systemInfo.memoryModules}
                                    </p>
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-3">
                                        <div
                                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{
                                                width: `${ramUsage}%`,
                                            }}
                                        >
                                            {ramUsage}%
                                        </div>
                                    </div>
                                    <p className="text-right mt-1">
                                        {bytesToGigaBytes(systemInfo.mem.used)}{' '}
                                        GB /{' '}
                                        {bytesToGigaBytes(systemInfo.mem.total)}{' '}
                                        GB
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </>
            )}
        </div>
    );
};
export default SystemInfoCard;
