import { cpu } from "@/app/types/cpu";

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
                <p>
                    <b>Cores</b>: {cpuInfo.physicalCores}
                </p>
                <p>
                    <b>Threads</b>: {cpuInfo.cores}
                </p>
            </div>
        </div>
    );
};
export default CPUComponent;
