import { disk } from '@/app/types/disk';
import DiskCard from './DiskCard/disk-card';

interface DiskComponentProps {
    disks: disk[];
}

const DiskComponent = ({ disks = [] }: DiskComponentProps) => {
    console.table(disks);
    return (
        <>
            {disks.map((disk, index) => (
                <DiskCard diskInfo={disk} key={index} />
            ))}
        </>
    );
};

export default DiskComponent;
