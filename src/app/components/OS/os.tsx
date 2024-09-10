import { os } from '@/app/types/os';

interface OSComponentProps {
    osInfo: os;
}

const OSComponent = ({ osInfo }: OSComponentProps) => {
    return (
        <div>
            <div className="text-center text-white font-bold text-xl">
                {osInfo.codename} ({osInfo.release})
            </div>
            <div className="text-center text-white font-bold text-xl">
                {osInfo.arch}
            </div>
        </div>
    );
};

export default OSComponent;
