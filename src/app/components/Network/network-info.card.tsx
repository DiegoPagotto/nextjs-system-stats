import React from 'react';
import { NetworkData } from '@/app/types/network';

interface NetworkComponentProps {
    networkData: NetworkData;
}

const NetworkComponent: React.FC<NetworkComponentProps> = ({ networkData }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Network Information</h2>
            {networkData.interfaces.map((iface, index) => (
                <div key={index} className="mb-4">
                    <p>
                        <b>Interface</b>: {iface.iface}
                    </p>
                    <p>
                        <b>IP Address</b>: {iface.ip4}
                    </p>
                    <p>
                        <b>MAC Address</b>: {iface.mac}
                    </p>
                    <p>
                        <b>Speed</b>: {iface.speed} Mbps
                    </p>
                    <p>
                        <b>Download</b>: {networkData.stats[index]?.rx} bytes
                    </p>
                    <p>
                        <b>Upload</b>: {networkData.stats[index]?.tx} bytes
                    </p>
                </div>
            ))}
        </div>
    );
};

export default NetworkComponent;
