import { os } from '@/app/types/os';

interface OSComponentProps {
    osInfo: os;
}

const OSComponent = ({ osInfo }: OSComponentProps) => {
    return (
        <div className="flex justify-around gap-2">
            <p>
                <b>Arch</b>: {osInfo.arch}
            </p>
            <p>
                <b>Codename</b>: {osInfo.codename}
            </p>
            <p>
                <b>Release</b>: {osInfo.release}
            </p>
        </div>
    );
};

export default OSComponent;
