import { cpu } from '@/app/types/cpu';
import ProgressBar from '../ProgressBar/progress-bar';

import amdLogo from '../../assets/logos/amd-logo.png';
import appleLogo from '../../assets/logos/apple-logo.png';
import intelLogo from '../../assets/logos/intel-logo.png';
import cpuLogo from '../../assets/logos/cpu-logo.png';

import Image from 'next/image';
import { CpuBrands } from '@/app/enums/cpuBrands';

interface CPUComponentProps {
    cpuInfo: cpu;
}

const CPUComponent = ({ cpuInfo }: CPUComponentProps) => {
    const getBrandLogo = (manufacturer: string) => {
        switch (manufacturer) {
            case CpuBrands.Intel:
                return intelLogo;
            case CpuBrands.AMD:
                return amdLogo;
            case CpuBrands.Apple:
                return appleLogo;
            default:
                return cpuLogo;
        }
    };

    return (
        <>
            <div className="flex gap-8">
                <div className="flex-1">
                    <div>
                        <p>
                            <b>Manufacturer</b>: {cpuInfo.manufacturer}
                        </p>
                        <p>
                            <b>Brand</b>: {cpuInfo.brand}
                        </p>
                        <p>
                            <b>Speed</b>: {cpuInfo.speed} GHz
                        </p>
                        <div className="flex gap-4">
                            <p>
                                <b>Cores</b>: {cpuInfo.physicalCores}
                            </p>
                            <p>
                                <b>Threads</b>: {cpuInfo.cores.length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={getBrandLogo(cpuInfo.manufacturer)}
                        alt="CPU Logo"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center mt-5">
                {cpuInfo.cores.map((core, index) => (
                    <div key={index}>
                        <p>
                            <b>Core {index + 1}</b>
                        </p>
                        <ProgressBar usedPercentage={core.load} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default CPUComponent;
