import { memory } from '@/app/types/memory';
import { bytesToGigaBytes, calculateUsedPercentage } from '@/app/utils/calculation-utils';
import { useState } from 'react';

interface MemoryComponentProps {
    memoryInfo: memory;
}

const MemoryComponent = ({ memoryInfo }: MemoryComponentProps) => {
    const [ramUsage, setRamUsage] = useState<number>(
        calculateUsedPercentage(memoryInfo.used, memoryInfo.total)
    );

    return (
        <div>
            <div className="ram-usage mt-3">
                <p>
                    <b>Tipo</b>: {memoryInfo.type}
                </p>
                <p>
                    <b>Voltagem</b>: {memoryInfo.voltageConfigured} V
                </p>
                <p>
                    <b>Módulos</b>: {memoryInfo.memoryModules}
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
                    {bytesToGigaBytes(memoryInfo.used)} GB /{' '}
                    {bytesToGigaBytes(memoryInfo.total)} GB
                </p>
            </div>
        </div>
    );
};

export default MemoryComponent;