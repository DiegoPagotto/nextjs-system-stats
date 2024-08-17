import { cpu } from '@/app/types/cpu';
import ProgressBar from '../ProgressBar/progress-bar';

interface CPUComponentProps {
    cpuInfo: cpu;
}

const CPUComponent = ({ cpuInfo }: CPUComponentProps) => {
    return (
        <div>
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
            </div>
        </div>
    );
};
export default CPUComponent;
