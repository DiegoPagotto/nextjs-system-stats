"use client";

import { useEffect, useState } from "react";
import SystemComponent from "../SystemComponent/system-component";

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
        free: number;
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

    useEffect(() => {
        async function fetchSystemInfo() {
            const response = await fetch('/api/system-info');
            console.log(response);
            const data = await response.json();
            setSystemInfo(data);
        }

        fetchSystemInfo();
    }, []);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-900">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">System Stats</div>
            </div>
            {systemInfo && (
                <SystemComponent title="CPU" body={(
                    <div>
                        <p><b>Manufacturer</b>: {systemInfo.cpu.manufacturer}</p>
                        <p><b>Brand</b>: {systemInfo.cpu.brand}</p>
                        <p><b>Speed</b>: {systemInfo.cpu.speed} GHz</p>
                        <p><b>Cores</b>: {systemInfo.cpu.physicalCores}</p>
                        <p><b>Threads</b>: {systemInfo.cpu.cores}</p>
                    </div>
                )} />
            )}
        </div>
    );
};
export default SystemInfoCard;