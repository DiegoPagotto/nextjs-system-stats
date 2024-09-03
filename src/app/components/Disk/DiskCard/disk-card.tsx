import { disk } from '@/app/types/disk';
import ProgressBar from '../../ProgressBar/progress-bar';

interface DiskCardProps {
    diskInfo: disk;
}

const DiskCard = ({ diskInfo }: DiskCardProps) => {
    return (
        <div className="card-body border border-indigo-900 rounded-lg shadow-md my-4">
            <div className="grid grid-cols-2 gap-4 p-4">
                <p>
                    <b>Name:</b> {diskInfo.name}
                </p>
                <p>
                    <b>Vendor:</b> {diskInfo.vendor}
                </p>
                <p>
                    <b>Type:</b> {diskInfo.type}
                </p>
                <p>
                    <b>Device:</b> {diskInfo.device}
                </p>
                <p>
                    <b>Size:</b> {diskInfo.size} GB
                </p>
                <p>
                    <b>Mount:</b> {diskInfo.mount}
                </p>
            </div>
            <div className="px-4">
                <ProgressBar
                    usedPercentage={(diskInfo.used / diskInfo.size) * 100}
                    subtitle={`${diskInfo.used} GB / ${diskInfo.size} GB`}
                />
            </div>
        </div>
    );
};
export default DiskCard;
